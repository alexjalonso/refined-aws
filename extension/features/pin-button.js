export default function () {
  const el = $('#nav-shortcutMenu');
  const parent = $(el).parent();

  $(el).prependTo($(parent).find('#nav-menu-right'));
}
