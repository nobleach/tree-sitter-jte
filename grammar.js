module.exports = grammar({
  name: 'jte',
  rules: {
    source_file: ($) => repeat($._node),

    _node: ($) =>
      choice(
        $.jte_comment,
        $.jte_declaration,
        $.jte_control_statement,
        $.jte_expression,
        $.jte_keyword,
        $.text
      ),

    jte_comment: ($) =>
      token(
        prec(
          1,
          seq(
            '<%--',
            /[^-]*(-[^-][^-]*)*-*-?/,
            '--%>'
          )
        )
      ),

    jte_declaration: ($) =>
      token(
        prec(
          1,
          seq(
            '@',
            choice('import', 'param'),
            /[ \t]+/,
            /[^\n\r]+/
          )
        )
      ),

    jte_control_statement: ($) =>
      token(
        prec(
          1,
          seq(
            '@',
            choice('if', 'elseif', 'for'),
            /[ \t]*/,
            /[^\n\r]+/
          )
        )
      ),

    jte_keyword: ($) =>
      token(
        prec(
          1,
          seq(
            '@',
            choice('else', 'endif', 'endfor', 'template')
          )
        )
      ),

    jte_expression: ($) =>
      choice(
        seq(token(prec(2, '${')), optional($.java_expression), '}'),
        seq(token(prec(2, '!{')), optional($.java_expression), '}')
      ),

    java_expression: ($) =>
      repeat1(
        choice(
          /[^}{"'\[\]()]+/,
          $.string,
          $.block,
          $.parenthesized,
          $.bracketed
        )
      ),

    block: ($) => seq('{', optional($.java_expression), '}'),

    parenthesized: ($) => seq('(', optional($.java_expression), ')'),

    bracketed: ($) => seq('[', optional($.java_expression), ']'),

    string: ($) =>
      choice(
        seq('"', /[^"\n\r]*/, '"'),
        seq("'", /[^'\n\r]*/, "'")
      ),

    text: ($) =>
      prec.right(
        repeat1(
          token(
            prec(1,
              choice(
                /[^@$<!]+/,
                /\$/,
                /!/,
                /</,
                /@[a-zA-Z0-9_]*/
              )
            )
          )
        )
      )
  }
});
