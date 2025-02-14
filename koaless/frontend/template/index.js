const vm = require('vm');
const fs = require('fs');

const template_source = {};

const template_context = vm.createContext({
    _(val) {
        if (!val) return '';
        return val.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
    },
    include(data, name, template_string) {
        const template = template_source[name] || createTemplate(name, template_string);
        return template(data);
    }
});

function createTemplate(name, template_string) {
    if (template_source[name]) {
        console.log(`您的模板库存中存在此模板: template - ${name}!`);
        return template_source[name];
    }
    template_source[name] = vm.runInNewContext(`
        (function(data) {
            with(data) {
                return \`${typeof template_string === 'undefined' ? fs.readFileSync(name, 'utf-8') : template_string}\`;
            }
        })
    `, template_context);
    return template_source[name];
}

module.exports = createTemplate;

