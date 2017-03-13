// jshint asi: true
;(function () {
  'use strict'

  const chat_tmpl = window.chat_tmpl

  const mockMessages = [{
    text: 'Hello, stranger!',
    my: false,
    date: new Date().getHours() + ':' + new Date().getMinutes()
  },{
    text: 'Hello, botik',
    my: true,
    date: new Date().getHours() + ':' + new Date().getMinutes()
  }]

  const LoginForm = window.LoginForm
  const MessageList = window.MessageList
  const MessageForm = window.MessageForm

  class Chat {
    constructor (options) {
      this.el = options.el

      this.userName = window.sessionStorage.getItem('chatWidgetName') || null
      this.messages = mockMessages || []

      this._initComponents()


      this.render()
      this.el.appendChild(this.loginForm.el)

      this._initEvents()
    }

    render () {
      this.el.innerHTML = chat_tmpl({
        messages: this.messages.reverse(),
        username: this.userName
      })
      // this.loginForm.render()
    }

    _initComponents () {
      this.loginForm = new LoginForm({
        el: document.createElement('div')
      })
    }

    _initEvents () {
      const chatLoginButton = this.el.querySelector('.chat__login-button')
      // console.log(chatLoginButton)
      chatLoginButton.addEventListener('click', this.loginForm.showModal)

    }
  }

  window.Chat = Chat

  //////////////////////////////////////////////////////////////
  let showButton = document.querySelector('.button__show-chat')
  let chatEl = document.querySelector('.chat')
  let chatLoginForm = document.querySelector('.chat-login')
  // let modalChat = document.querySelector('.modal__chat')
  // let chatLoginButton = document.querySelector('.chat__login-button')
  let modalClose = document.querySelector('.modal__chat-close')
  let loginFalse = document.querySelector('.login-false')
  let loginTrue = document.querySelector('.login-true')

  showButton.addEventListener('click', (e) => {
    e.preventDefault()

    let applyEl = e.target
    if (e.target.tagName !== 'BUTTON') applyEl = e.target.parentNode
    applyEl.innerHTML = applyEl.innerHTML === '<i class="fa fa-chevron-left"></i>' ? '<i class="fa fa-chevron-right"></i>' : '<i class="fa fa-chevron-left"></i>'
    chatEl.classList.toggle('column-25')
    chatEl.classList.toggle('column-0')
  })

//  chatLoginButton.addEventListener('click', (e) => {
//    e.preventDefault()
//
//    modalChat.classList.remove('not-visible')
//  })

  chatLoginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    modalChat.classList.add('not-visible')
    loginFalse.classList.add('hidden')
    loginTrue.classList.remove('hidden')
  })

  modalClose.addEventListener('click', (e) => {
    e.preventDefault()

    modalChat.classList.add('not-visible')
  })

})()