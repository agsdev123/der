import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { BellFilled, CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import './Header.scss';

// Import your logo image
// import logoImage from './path-to-your-logo.png'; // Update this path

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3" onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <header className="custom-header">
      <div className="logo">
        {/* <img src={logoImage} alt="STEPS AI Logo" /> */}
      </div>
      <div className="user-actions">
        <BellFilled className="notification-icon" />
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <span className="user-name">Danielle Campbell</span>
              <CaretDownOutlined className="dropdown-icon" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;