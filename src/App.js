import {Form, Divider, Input , message, Button, Typography,} from "antd";
import './App.css';
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

function App() {
  const login=()=>{
    message.success('Login Successfull!');
  };
  return (
    <div className="App">
      <Form className="form" onFinish={login}>
        <Typography.Title>
          Welcome Back!!
        </Typography.Title>
        <Form.Item name={'myEmail'}
        rules={[
          {
            required:true,
            type:"email",
            message:"Please enter valid email",
          }
        ]} >
          <Input placeholder="Enter your email"/>
        </Form.Item>
        <Form.Item name={'myPassword'}
        rules={[
          {
            required:true,
            message:"Please enter your password",
          }
         ]} >
          <Input.Password placeholder="Enter your Password"/>
        </Form.Item>
        <Button type="primary" htmlType="submit" block className="button">
         Login
        </Button>
        <Divider style={{borderColor: "black"}}>or Login with</Divider>
        <div className="icons">
        <GoogleOutlined className="socialicons" onClick={login}/>
        <FacebookFilled className="socialicons" onClick={login}/>
        <TwitterOutlined className="socialicons" onClick={login}/>
        </div>
      </Form>
    </div>
    
  );
}

export default App;
