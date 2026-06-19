; JTE template syntax highlighting

; JTE comments
(jte_comment) @comment

; JTE directives
(jte_declaration) @keyword
(jte_control_statement) @keyword
(jte_keyword) @keyword

; JTE expressions
(jte_expression) @embedded

; Java strings inside expressions
(string) @string

; Brackets and delimiters in Java expressions
(block
  "{" @punctuation.bracket
  "}" @punctuation.bracket)

(parenthesized
  "(" @punctuation.bracket
  ")" @punctuation.bracket)

(bracketed
  "[" @punctuation.bracket
  "]" @punctuation.bracket)
