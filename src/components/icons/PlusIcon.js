import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from 'vue';

export default function render() {
  return (_openBlock(), _createElementBlock('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, [
    _createElementVNode('path', {
      'fill-rule': 'evenodd',
      d: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-11a1 1 0 1 0-2 0v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7Z',
      'clip-rule': 'evenodd'
    })
  ]));
}
