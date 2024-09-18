  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
        async login() {
            try {
                // Prima ottieni il token CSRF
                await fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
                method: 'GET',
                credentials: 'include',
                });

                // Ora fai la richiesta di login
                const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Assicura che i cookie di sessione siano inclusi
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
                });

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                if (data.token) {
                localStorage.setItem('auth_token', data.token);
                if (data.isAdmin) {
                    window.location.href = 'http://127.0.0.1:8000/admin';
                } else {
                    this.$router.push('/');
                }
                } else {
                console.error('Login fallito');
                }
            } catch (error) {
                console.error('Errore durante il login:', error);
            }
        }
    }
  };
  </script>
  
  <template>
    <div class="login-container">
      <div class="login-content">
        <h1 class="login-title">Accedi</h1>
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" />
          </div>
          <button type="submit" class="btn-login">Login</button>
        </form>
      </div>
    </div>
  </template>

  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9; /* Sfondo leggero per contrastare il form */
  }
  
  .login-content {
    text-align: center; /* Centratura del contenuto */
  }
  
  .login-title {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 3rem; /* Aumenta il distacco dal form */
  }
  
  .login-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-control {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .form-control:focus {
    border-color: #6b8e23; /* Verde oliva */
    outline: none;
  }
  
  .btn-login {
    width: 100%;
    padding: 0.75rem;
    font-size: 1.2rem;
    background-color: #6b8e23; /* Verde oliva */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-login:hover {
    background-color: #556b2f; /* Verde oliva scuro */
  }
  </style>