import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { userStore } from './../stores/userStore';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../stores/authStore';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const auth = useAuthStore((state) => state.login);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      auth(formData);
      await userStore.login(formData); // Используем async/await
      navigate('/'); // Перенаправляем после успешной авторизации
    } catch (error) {
      console.error(error.message); // Отображаем ошибку
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Вход
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Юзернейм"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="Пароль"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Войти
        </Button>
      </form>
    </Container>
  );
};