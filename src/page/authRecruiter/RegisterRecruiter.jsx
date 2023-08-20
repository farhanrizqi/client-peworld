import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action/recruiter";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import bannerPhoto from "../../assets/image/bannerPhoto.png";
import Logo1 from "../../assets/image/logo1.png";
import "../../assets/css/main.css";

const RegisterRecruiter = () => {
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    company_name: '',
    position: '',
    phone: '',
    password: '',
    confirm_password: ''
  })

  const postDataRegister = async (e) => {
    e.preventDefault();
    dispatch(register(inputData))
  }

  const onChangeRegister = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
    console.log('Register Recruiter', inputData)
  }


  return (
    <div>  
      <Container className="py-3">
        <Row className="">
          <Col md="6" className="">
            <Card className="border-0">
              <div className="bannerPhoto">
                <img src={bannerPhoto} alt="" />
              </div>
              <div className="card-img-overlay">
                <div className="ps-4 mt-3">
                  <img src={Logo1} alt="" className="" style={{ width: 100 }} />
                </div>
                <div className="h-75 d-flex align-items-center">
                  <div className="ms-4">
                    <h2 className="text-white w-75">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h2>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6">
            <div className="mt-3 mt-md-5 ps-0 ps-md-4">
              <h3>Halo, Pewpeople</h3>
              <p className="text-desc fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

              <Form onSubmit={postDataRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" name="name" onChange={onChangeRegister} value={inputData.name} className="py-3" placeholder="Masukan nama panjang" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={onChangeRegister} value={inputData.email} className="py-3" placeholder="Masukan alamat email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Perusahaan</Form.Label>
                  <Form.Control type="text" name="company_name" onChange={onChangeRegister} value={inputData.company_name} className="py-3" placeholder="Masukan nama perusahaan" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jabatan</Form.Label>
                  <Form.Control type="text" name="position" onChange={onChangeRegister} value={inputData.position} className="py-3" placeholder="Posisi di perusahaan Anda" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control type="number" name="phone" onChange={onChangeRegister} value={inputData.phone} className="py-3" placeholder="Masukkan no handphone" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control type="password" name="password" onChange={onChangeRegister} value={inputData.password} className="py-3" placeholder="Masukan kata sandi" />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control type="password" name="confirm_password" onChange={onChangeRegister} value={inputData.confirm_password} className="py-3" placeholder="Masukan konfirmasi kata sandi" />
                </Form.Group>

                <div>
                  <Button type="submit" variant="warning" className="d-block w-100 py-3 text-white fw-bold">
                    Daftar
                  </Button>
                </div>
              </Form>
              <div className="d-flex justify-content-center mt-3">
                <p>
                  Anda sudah punya akun?{" "}
                  <Link to="" className="text-warning" style={{ textDecoration: "none" }}>
                    Masuk disini
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default RegisterRecruiter;
