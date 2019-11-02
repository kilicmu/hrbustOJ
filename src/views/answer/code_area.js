// 我这里引入的是SQL语言文件
import 'codemirror/mode/sql/sql.js'
// 编辑的主题文件
import 'codemirror/theme/base16-light.css'
//编辑器代码高亮css文件
import 'codemirror/addon/hint/show-hint.css'
//代码折叠文件
require('codemirror/addon/fold/foldcode.js')
require('codemirror/addon/fold/foldgutter.js')
require('codemirror/addon/edit/matchbrackets.js')
require('codemirror/addon/fold/brace-fold.js')
//选中行高亮文件
require('codemirror/addon/selection/active-line.js')
//缩进文件
require('codemirror/addon/fold/indent-fold.js')
//代码只能提示
require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/sql-hint.js')
//addon文件夹放的是Code Mirror的功能插件
require('codemirror/addon/fold/comment-fold.js')
export default {
    data() {
        return {
            code: `-- 按ctrl唤起智能提示
      SELECT * FROM`, //初始默认编辑器内容
            cmOptions: {
                // 编辑器设置
                tabSize: 4, //tab大小
                mode: 'text/x-mysql', //编辑器模式支持文件
                theme: 'base16-light', //编辑器主题
                lineNumbers: true, //编辑器行号
                line: true,
                dragDrop: false, //拖拽
                lineWrapping: false, //代码折叠
                matchBrackets: true, //括号匹配
                // autofocus: true,//自动聚焦
                indentWithTabs: true, //首行缩进
                smartIndent: true,
                extraKeys: {
                    "Ctrl": "autocomplete"
                }, //ctrl唤起智能提示
                // more codemirror options, 更多 codemirror 的高级配置...
                hintOptions: {
                    tables: {
                        users: ["name", "score", "birthDate"],
                        countries: ["name", "population", "size"]
                    }
                },
            }
        }
    },
    methods: {
        onCmReady(cm) {
            console.log('the editor is readied!', cm)
        },
        onCmFocus(cm) {
            console.log('the editor is focus!', cm)
        },
        onCmCodeChange(newCode) {
            console.log('this is new code', newCode)
            this.code = newCode
        }
    },
    computed: {
        codemirror() {
            console.log(this.$refs.myCm.codemirror.lineCount())
            //这里可以写方法，比如下面的设置内容
            this.$refs.myCm.codemirror.setValue(this.code + ' ' + 'aaaaaaaaaaaaaaa')
            return this.$refs.myCm.codemirror
        }
    },
    mounted() {
        console.log('this is current codemirror object', this.codemirror)
        // you can use this.codemirror to do something...
    }
}