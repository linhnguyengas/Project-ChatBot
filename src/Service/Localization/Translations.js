import LocalizedStrings from 'react-localization';

export const DEFAULT_LANGUAGE = 'English';

const translate = {
  'English': {
    EMAIL: 'Email',
    PASSWORD: 'Password',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up',
    REGISTER: 'Register',
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    BACK: 'Back',
    SELECT_CHAT: 'Select Chat',
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
    LANGUAGE: 'Language',
    SELECT_LANGUAGE: 'Select language',
    SUPPORT: 'Support',
    SIGN_OUT: 'Sign Out',
  },
  'Tiếng Việt': {
    EMAIL: 'Email',
    PASSWORD: 'Mật khẩu',
    SIGN_IN: 'Đăng Nhập',
    SIGN_UP: 'Đăng Kí',
    REGISTER: 'ĐĂNG KÍ',
    FIRST_NAME: 'Họ',
    LAST_NAME: 'Tên',
    BACK: 'Trở lại',
    SELECT_CHAT: 'Chọn Chat',
    PROFILE: 'Thông tin',
    SETTINGS: 'Cài đặt',
    LANGUAGE: 'Ngôn ngữ',
    SELECT_LANGUAGE: 'Chọn ngôn ngữ',
    SUPPORT: 'Hỗ trợ',
    SIGN_OUT: 'Đăng xuất',
  },
};
export default new LocalizedStrings(translate);
