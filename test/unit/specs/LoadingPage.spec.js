import Vue from 'vue'
import LandingPage from '@/pages/LoadingPage'

describe('LoadingPage.vue', () => {
  it('should render loading text', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(LandingPage),
    }).$mount()

    expect(vm.$el.querySelector('span').textContent).to.contain('Loading...')
  })
})
