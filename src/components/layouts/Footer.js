import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white">
      <div className="row">
        <div className="col-3">icon</div>
        <div className="col-3">Về chúng tôi</div>
        <div className="col-3">Ứng dụng The Coffee House</div>
        <div className="col-3">
          Hỗ trợ khách hàng
          <ul className="list-unstyled">
            <li>Delivery</li>
            <li>Hotline</li>
            <li>Địa chỉ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
