import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./LayoutDefault.scss";
import { Input } from "antd";
const { Search } = Input;

function Header() {
  const isLogin = true;
  const navigate = useNavigate();

  const onSearch = (value) => {
    navigate(`/product?keyword=${value}`);
  };

  return (
    <>
      <header className="layout-default__header">
        <div className="layout-default__header__logo">
          <img
            src="https://images.unsplash.com/photo-1729546493750-314d158125fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt="Ảnh logo"
          />
        </div>

        <div className="layout-default__header__menu">
          {isLogin ? (
            <>
              <div className="layout-default__header__cart">
                <Search
                  placeholder="Nhập mặt hàng bạn muốn chọn"
                  onSearch={onSearch}
                  style={{
                    width: 300,
                  }}
                />
                <NavLink to="">
                  <ShoppingCartOutlined className="layout-default__header__cart--icon" />
                  Cart
                </NavLink>
              </div>
            </>
          ) : (
            <ul>
              <li>
                <NavLink to="">Đăng nhập</NavLink>
              </li>
              <li>
                <NavLink to="">Đăng xuất</NavLink>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
