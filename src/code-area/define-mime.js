import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/lint";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/mode/sql/sql.js";

import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/hint/show-hint";
function set(str) {
  var obj = {},
    words = str.split(" ");
  for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
  return obj;
}
CodeMirror.defineMIME("text/x-flink-sql", {
  name: "sql",
  client: set("source"),
  // http://www.espertech.com/esper/release-5.5.0/esper-reference/html/appendix_keywords.html
  keywords: set(
    "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"
  ),
  builtin: set("builtin"),
  atoms: set("false true null"),
  operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
  dateSQL: set("time"),
  support: set("decimallessFloat zerolessFloat binaryNumber hexNumber"),
});
