# tree-sitter-jte

A Tree-sitter parser for [JTE](https://jte.gg/) (Java Template Engine) templates.

## Installation

### Neovim

Since this parser is not yet in the nvim-treesitter registry, you can install it as a local parser:

```lua
require('nvim-treesitter').setup({
  local_parsers = {
    jte = {
      source = {
        type = 'local',
        path = '~/path/to/tree-sitter-jte',
        queries_path = 'queries',
      },
      filetypes = { 'jte', 'kte' },
    },
  },
})
```

Then run:
```vim
:TSInstall jte
```

### Filetype Detection

Add this to your Neovim config to automatically detect `.jte` and `.kte` files:

```lua
vim.filetype.add({
  extension = {
    jte = 'jte',
    kte = 'kte',
  },
})
```

Or create a file `~/.config/nvim/ftdetect/jte.lua` with:

```lua
vim.filetype.add({
  extension = {
    jte = 'jte',
    kte = 'kte',
  },
})
```

A ready-to-use snippet is also provided in this repository at `nvim/ftdetect/jte.lua`.

## References

- [JTE Documentation](https://jte.gg/)
- [Tree-sitter](https://tree-sitter.github.io/)
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
