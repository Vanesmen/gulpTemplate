Список правил для линтера:
https://github.com/pugjs/pug-lint/blob/master/docs/rules.md

Модуль gulp-w3c-html-validator старой версии 1.4.4 т.к. только в нем отстутствует ESM

Для исправления ошибки eslint-config-standard: Environment key "es2021" is unknown в папке node_modules/gulp-eslint/node_modules нужно удалить eslint чтобы модуль брал зависимисть из пакета нужной версии