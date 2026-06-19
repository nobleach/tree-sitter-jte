; Injection queries for JTE templates

; Inject HTML into text nodes
(text) @injection.content
(#set! injection.language "html")

; Inject Java into JTE expressions
(jte_expression
  (java_expression) @injection.content)
(#set! injection.language "java")
