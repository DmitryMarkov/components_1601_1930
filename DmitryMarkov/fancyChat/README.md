### demo: https://dmitrymarkov.github.io/components_1601_1930/DmitryMarkov/fancyChat/

### Commands
```
pug --client chat/templates/modal.pug --extension pug.js --name modal_tmpl
pug --client chat/templates/chat.pug --extension pug.js --name chat_tmpl
sass --watch chat/sass:chat
```

### Questions

- кнопка показа/скрытия чата отделена в HTML от виджета. Можно ли как-то сделать ее внутри, не теряя функциональности?

### TODO

- [x] overflow-y
- [x] audio blink sound
- [x] setTimeout for botik messages
- [x] localStore username and botik use this name
- [ ] textarea auto resize with text
- [x] chat window auto scroll
- [x] pug templates
- [x] scss file with vars and mixins
- [ ] show/hide button component
- [ ] replace emojis
- [ ] date divider and proper date in message history
- [ ] bem styles
- [x] event-oriented interface
- [ ] accent corners
- [ ] chat with me button closed
- [ ] my own background
- [ ] webpack conf
- [ ] generic form component with extends
- [ ] DataService class with fetch/json
- [ ] Botik class
- [ ] Event apply class
- [ ] Optimize toggle chat
- [ ] Move to my repo