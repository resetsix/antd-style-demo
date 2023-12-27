import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    'ant-menu-submenu-placement-bottomLeft.ant-menu': {
      display: 'none',
    },
    '.ant-menu-item, .ant-menu-submenu': {
      '.ant-menu-title-content': {
        svg: {
          fontSize: '20px',
        },
      },
    },
  };
});
export default useStyles;
