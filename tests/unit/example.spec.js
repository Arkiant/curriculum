import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Work from '@/components/Work.vue'

describe('Work.vue', () => {
  it('renders empty when passed', () => {
    
    const wrapper = shallowMount(Work, {})
    expect(wrapper.text()).to.empty
  })
})
