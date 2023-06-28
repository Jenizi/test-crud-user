import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { IMaskInput } from "react-imask";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";
import useHome from "../../hooks/useHome";
import "./styles.css";

const Home: React.FC = () => {
  const [userData, refreshData] = useHome();
  const [name, setName] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userId, setUserId] = useState<number>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/user", {
        name: name,
        cpf: cpf?.replaceAll(".", "").replaceAll("-", ""),
        login: login,
        password: password,
      });
      toast.success("Registration added.", {
        position: "top-center",
        duration: 3000,
      });
      await refreshData();
      setName("");
      setCpf("");
      setLogin("");
      setPassword("");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Error adding data.", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/user/${userId}`, {
        name: name,
      });
      toast.success("Edited record.", {
        position: "top-center",
        duration: 3000,
      });
      await refreshData();
      setName("");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Error editing data.", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  const handleRemove = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.delete(`/user/${userId}`);
      toast.success("Record removed.", {
        position: "top-center",
        duration: 3000,
      });
      await refreshData();
      setName("");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Error removing data.", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <Nav />
      <div className="new-user">
        <Button toggle="modal" target="#exampleModal" name="NEW USER" />
        <div>
          {!userData ? (
            <div>loading. . .</div>
          ) : (
            <div className="cards">
              {userData.map((item: any, index: any) => {
                return (
                  <Card
                    key={index}
                    id={item.id}
                    userName={item.name}
                    userCpf={item.cpf}
                    userLogin={item.login}
                  >
                    <Button
                      toggle="modal"
                      target="#exampleModal2"
                      name="edit"
                      color="#16697a"
                      click={() => {
                        setUserId(item.id);
                      }}
                    />
                    <Button
                      toggle="modal"
                      target="#exampleModal3"
                      name="del"
                      color="#9a031e"
                      click={() => {
                        setUserId(item.id);
                      }}
                    />
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <Modal
          title="New user?"
          idLabel="exampleModalLabel"
          id="exampleModal"
          click={handleSubmit}
        >
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            value={name}
            change={(e) => setName(e.target.value)}
          />
          <label className="d-block">CPF</label>
          <IMaskInput
            mask="000.000.000-00"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.currentTarget.value)}
          />
          <Input
            label="Login"
            type="text"
            placeholder="Login"
            value={login}
            change={(e) => setLogin(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            change={(e) => setPassword(e.target.value)}
          />
        </Modal>
        <Modal
          title="Edit user?"
          idLabel="exampleModalLabel2"
          id="exampleModal2"
          click={handleEdit}
        >
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            value={name}
            change={(e) => setName(e.target.value)}
          />
        </Modal>
        <Modal
          title="Confirm delete user?"
          idLabel="exampleModalLabel3"
          id="exampleModal3"
          click={handleRemove}
        ></Modal>
      </div>
    </>
  );
};

export default Home;
