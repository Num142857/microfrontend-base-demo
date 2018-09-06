module.exports = {
    plugins: ['react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: { // 其他语言特性
            experimentalObjectRestSpread: true, // ...rest参数和扩展扩算符
            jsx: true,
            modules: true
        },
        sourceType: 'module', // 默认script，可选module
    },
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    globals: { // 全局变量，false代表无法重写
        React: true,
        document: false,
        navigator: false,
        window: false,
        'DEV': true,
        'TEST': true,
        'PRE': true,
        'PRO': true
    },
    // http://eslint.org/docs/rules/xxx, xxx代表rule名称, 0=off, 1=warning, 2=error
    rules: { // 具体规则
        'accessor-pairs': 2, // getter/setter成对出现
        'arrow-spacing': [
            1,
            {
                'before': true, 'after': true
            }
        ], // 箭头函数前后有空格
        'array-bracket-spacing': [
            1, 'never'
        ], // 数组内前后无空格
        'block-spacing': [
            1, 'always'
        ], // 单行{}前后有空格
        'brace-style': [
            2, '1tbs',
            {
                'allowSingleLine': true
            }
        ], // {}换行，单行不用
        'camelcase': [
            2,
            {
                'properties': 'never'
            }
        ], // 属性名可以不是驼峰
        'comma-dangle': [
            1, 'only-multiline'
        ], // 数组/对象最后一个必须有,
        'comma-spacing': [
            1,
            {
                'before': false, 'after': true
            }
        ], // ,前有空格, 后无空格
        'comma-style': [
            2, 'last'
        ], // ,在最后，不能换行
        'constructor-super': 1, // super()在必须构造函数内
        'curly': [
            2, 'multi-line'
        ], // if/while等函数可以多行不带{}
        'dot-location': [
            2, 'property'
        ], // .的位置可以在换行
        'eol-last': 1, // 文件末尾需要空白行
        'eqeqeq': [
            2, 'allow-null'
        ], // 必须===, null除外
        'generator-star-spacing': [
            2,
            {
                'before': true, 'after': true
            }
        ], // generator函数前后有空格
        'handle-callback-err': [
            2, '^(err|error)$'
        ], // 有err/error必须处理异常
        'indent': [
            1,
            2,
            {
                'SwitchCase': 1
            }
        ], // 缩进2格，switch中1格
        'jsx-quotes': [
            2, 'prefer-single'
        ], // jsx属性用单引号
        'key-spacing': [
            2,
            {
                'beforeColon': false, 'afterColon': true
            }
        ], // 对象属性前有空格, 后无空格
        'keyword-spacing': [
            2,
            {
                'before': true, 'after': true
            }
        ], // 关键词前后有空格, 如if-else
        'new-cap': [
            2,
            {
                'newIsCap': true, 'capIsNew': false
            }
        ], // new后必须大写开头构造函数, 大写开头不一定要new
        'new-parens': 2, // new的构造函数必须带参数
        'object-curly-spacing': [
            2, 'always',
            {
                objectsInObjects: false
            }
        ], // 对象{}前后有空格, 对象内的对象例外
        'no-array-constructor': 2, // Array(10)->yes, Array(1, 2)->no
        'no-caller': 2, // 禁止caller/callee
        'no-class-assign': 2, // 禁止赋值class
        'no-cond-assign': 2, // 条件不能有赋值
        'no-const-assign': 2, // 禁止赋值常量(const)
        'no-control-regex': 2, // reg中不能有控制符号
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1, // node环境prod禁用
        'no-delete-var': 2, // 不能delete变量，可以用在对象
        'no-dupe-args': 2, // 参数不能重复
        'no-dupe-class-members': 2, // class中方法不能有重复
        'no-dupe-keys': 2, // 对象key不能重复
        'no-duplicate-case': 2, // switch不能有重复case
        'no-empty-character-class': 2, // reg中不能有空字符串
        'no-empty-pattern': 2, // 解构不能有空解构模式
        'no-eval': 2, // 不能用eval
        'no-ex-assign': 2, // 不能复制catch中的error
        'no-extend-native': 2, // 不能扩展Object原型
        'no-extra-bind': 2, // bind的函数体中要有明确的this
        'no-extra-boolean-cast': 2, // 禁止多余的Boolean转换
        'no-extra-parens': [
            2, 'functions'
        ], // 函数中禁止多余的括号
        'no-fallthrough': 2, // switch需要break
        'no-floating-decimal': 2, // float中0不能省略
        'no-func-assign': 2, // 禁止赋值函数
        'no-implied-eval': 2, // 禁止隐性eval
        'no-inner-declarations': [
            2, 'functions'
        ], // 禁止在条件中声明function
        'no-invalid-regexp': 2, // 禁止无用的reg
        'no-irregular-whitespace': 2, // 禁止不规则空格
        'no-iterator': 2, // 禁止使用__iterator__属性
        'no-label-var': 2, // 禁止label var
        'no-labels': [
            2,
            {
                'allowLoop': false, 'allowSwitch': false
            }
        ], // 禁止label表达式
        'no-lone-blocks': 2, // 禁止无用的{}
        'no-mixed-spaces-and-tabs': 2, // space和tab不混用
        'no-multi-spaces': 1, // 禁止多空格
        'no-multi-str': 2, // 禁止多行的string
        'no-multiple-empty-lines': [
            2,
            {
                'max': 1
            }
        ], // 禁止多空行，最大1行
        'no-native-reassign': 2, // 禁止赋值原生对象(window/Object...)
        'no-negated-in-lhs': 2, // !(key in object)->yes, !key in object->no
        'no-new-object': 2, // new Object()->no
        'no-new-require': 2, // new require(xxx)->no
        'no-new-symbol': 2, // new Symbol(xxx)->no
        'no-new-wrappers': 2, // String/Number等不能用new
        'no-obj-calls': 2, // 禁止calling全局对象属性，如Math/JSON
        'no-octal': 2, // 禁止八进制文字
        'no-octal-escape': 2, // 禁止八进制转义
        'no-path-concat': 2, // __dirname和__filename禁止string拼接
        'no-proto': 2, // 禁止使用__proto__
        'no-redeclare': 2, // 禁止重新复制var
        'no-regex-spaces': 2, // 禁止reg出现多个空格
        'no-return-assign': [
            2, 'except-parens'
        ], // 禁止return中赋值
        'no-self-assign': 2, // 禁止自身赋值
        'no-self-compare': 2, // 禁止自身比较, 如果NaN->Number.isNaN
        'no-sequences': 2, // 禁止,操作符
        'no-shadow-restricted-names': 2, // 禁止跟踪严格模式下部分关键词
        'no-spaced-func': 2, // function的()不要空格
        'no-sparse-arrays': 2, // array不能用空元素
        'no-this-before-super': 2, // super()前不能用this
        'no-throw-literal': 2, // 禁止直接throw内容，必须是Error()
        'no-trailing-spaces': 1, // 禁止多余的空格
        // 'no-undef': 2, // 禁止使用未赋值变量
        'no-undef-init': 2, // 变量不能初始化为undefined
        'no-unexpected-multiline': 2, // 禁止有疑义的多行表达式
        'no-unmodified-loop-condition': 2, // 循环中的变量要在循环中修改
        'no-unneeded-ternary': [
            2,
            {
                'defaultAssignment': false
            }
        ], // 禁止不必要的三元操作符
        'no-unreachable': 2, // return/throw等之后不应有表达式
        'no-unsafe-finally': 2, // 禁止不安全的finally
        'no-unused-vars': [
            0,
            {
                'vars': 'all', 'args': 'none'
            }
        ], // 禁止不使用的变量，参数可以
        'no-useless-call': 2, // 禁止无用的call
        'no-useless-computed-key': 2, // 禁止无用的计算属性
        'no-useless-constructor': 2, // 禁止无用的constructor
        'no-whitespace-before-property': 2, // 属性前不能有空格
        'no-with': 2, // 禁用with
        'one-var': [
            2,
            {
                'initialized': 'never'
            }
        ], // 只能一个var, 初始化不检查
        'operator-linebreak': [
            2, 'after',
            {
                'overrides': {
                    '?': 'before', ':': 'before'
                }
            }
        ], // 操作符换行, 默认在行末, ?和:在下一行前
        'padded-blocks': [
            1, 'never'
        ], // 作用域中没有padded的空行
        'quotes': [
            2, 'single',
            {
                'avoidEscape': true, 'allowTemplateLiterals': true
            }
        ], // 使用单引号, 转义或者模版可以例外
        'semi': [
            2, 'never'
        ], // 禁用结尾;
        'semi-spacing': [
            2,
            {
                'before': false, 'after': true
            }
        ], // ;前有空格, 后无空格
        'space-before-blocks': [
            2, 'always'
        ], // 作用域前有空格
        'space-in-parens': [
            2, 'never'
        ], // 括号内无空格
        'space-infix-ops': 2, // 插入的操作符需要空格, 如+/-
        'space-unary-ops': [
            2,
            {
                'words': true, 'nonwords': false
            }
        ], // 操作符单词类要空格(new/delete), 非单词不要空格(++/--/!)
        'spaced-comment': [
            2, 'always',
            {
                'markers': ['!', ',', '/', '-'
                ]
            }
        ], // 注释要空格，markers为例外
        'template-curly-spacing': [
            2, 'never'
        ], // 模版字符串中变量无空格
        'use-isnan': 2, // 使用isNaN
        'valid-typeof': 2, // typeof的字符串必须正确
        'wrap-iife': [
            2, 'any'
        ], // 立即调用的function必须有括号
        'yield-star-spacing': [
            2, 'both'
        ], // yield的*前后有空格
        'yoda': [
            2, 'never'
        ], // 条件中变量在前
        'prefer-const': 0, // 能用const场景用const
        'no-useless-escape': 0, // 不检查escape
        'space-before-function-paren': 0, // 函数括号无空格
        // 'no-use-before-define': 1, // 未定义不能使用    
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prefer-es6-class': 1, // 禁止使用ES5语法创建React组件
        'react/prefer-stateless-function': 1, // 组件没有状态或是没有引用refs，推荐使用无状态组件(函数声明)而不是类
        'react/jsx-pascal-case': 2, // 组件名称使用帕斯卡命名法
        'react/jsx-closing-bracket-location': 1, // 自关闭的jsx标签代码对齐格式
        'react/jsx-tag-spacing': 1, // 自关闭的标签前加一个空格
        'react/jsx-curly-brace-presence': 1, // 不需要多余的 去掉props和children多余的花括号,如title={"标题"}和<div>{"标题"}</div>
        'react/self-closing-comp': [
            1,
            {
                "component": true,
                "html": false
            }
        ], // 没有子元素的标签总是自关闭标签
        'react/jsx-curly-spacing': 1, // 不要在props的{}里两边加空格
        'react/jsx-equals-spacing': 1, // props属性不允许等号两边加空格
        'react/jsx-indent-props': [
            1,
            2
        ], // props缩进格式
        'react/jsx-uses-vars': 1, // 提示未使用已定义的变量
        'react/jsx-boolean-value': 1, // boolean类型props属性不需要加 ={true}
        'react/no-string-refs': 1, // ref里使用回调函数
        'react/no-children-prop': 1, // 不允许在props添加children属性
        'react/no-danger-with-children': 1, // 阻止chidren和dangerouslySetInnerHTML={{ __html: "HTML" }}同时使用
        'react/no-deprecated': 1, // 阻止使用旧版本即将废弃的api
        'react/no-did-mount-set-state': 1, // 阻止在componentDidMount中使用this.setState()
        'react/no-did-update-set-state': 1, // 阻止在componentDidUpdate中使用this.setState()
        'react/no-direct-mutation-state': 1, // 禁止直接修改state
        'react/no-find-dom-node': 0, // 禁用 findDOMNode
        'react/no-is-mounted': 1, // 禁用 isMounted
        'react/no-multi-comp': 0, // 阻止一个文件定义多个组件
        'react/no-typos': 1, // 检测错误的组件生命周期名称,以及组件静态属性,主要是大小写
        'react/no-this-in-sfc': 0, // 阻止在无状态组件中使用this
        // 'no-redundant-should-component-update': 1, // 阻止在纯组件中使用shouldComponentUpdate
        'react/no-unescaped-entities': 1, // jsx防止无效字符,比如  } " '
        'react/no-unknown-property': 1, // 防止使用未知的DOM属性
        'react/no-unused-state': 1, // 防止定义了state却未使用
        'react/no-will-update-set-state': 1, // 防止在componentWillUpdate中使用this.setState
        'react/jsx-no-duplicate-props': [
            1
        ], // 重复props属性
        'react/jsx-key': [
            1
        ], // 渲染array需要key
        'react/jsx-indent': [
            1,
            2
        ], // jsx缩进2个空格
        'react/prefer-stateless-function': 1, // 使用函数代替无状态组件
        'react/react-in-jsx-scope': 1, // 防止未引入react就使用jsx
        'react/style-prop-object': 1, // props的style属性必须是个object
        'react/void-dom-elements-no-children': 1, // 自关闭的element不允许添加children ,如<br/>
    }
}