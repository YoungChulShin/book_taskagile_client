import Vue from 'vue'
import RegisterPage from '@/views/RegisterPage'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(VueRouter);

// mock
jest.mock('@/services/registration');

const router = new VueRouter();

describe('RegisterPage.vue', () => {

  let wrapper
  let fieldUsername
  let fieldEmailAddress
  let fieldPassword
  let buttonSubmit

  beforeEach(() => {
    wrapper = mount(RegisterPage, {
      localVue,
      router
    }) // 마운트와 렌더링이 완료된 객체를 생성
    fieldUsername = wrapper.find('#username')
    fieldEmailAddress = wrapper.find('#emailAddress')
    fieldPassword = wrapper.find('#password')
    buttonSubmit = wrapper.find('form button[type="submit"]')
  })

  // 초기화 렌더링 테스트
  it('should render correct contents', () => {
    expect(wrapper.find('.logo').attributes().src).toEqual('/static/images/logo.png')
    expect(fieldUsername.element.value).toEqual('')
    expect(fieldEmailAddress.element.value).toEqual('')
    expect(fieldPassword.element.value).toEqual('')
    expect(buttonSubmit.text()).toEqual('Create account')

    expect(wrapper.vm.form.username).toEqual('')
    expect(wrapper.vm.form.emailAddress).toEqual('')
    expect(wrapper.vm.form.password).toEqual('')
  })

  // 입력과 데이터 바인딩 테스트
  // it('should have form inputs bound with data model', () => {
  //   const username = 'sunny';
  //   const emailAddress = 'test@local';
  //   const password = 'testPass';
  //
  //   wrapper.vm.form.username = username;
  //   wrapper.vm.form.emailAddress = emailAddress;
  //   wrapper.vm.form.password = password;
  //
  //   expect(fieldUsername.element.value).toEqual(username);
  //   expect(fieldEmailAddress.element.value).toEqual(emailAddress);
  //   expect(fieldPassword.element.value).toEqual(password);
  // })

  it('should have form inputs bound with data model', () => {
    const stub = jest.fn();
    wrapper.setMethods({submitForm: stub});
    buttonSubmit.trigger('submit');
    expect(stub).toBeCalled();
  })
})
