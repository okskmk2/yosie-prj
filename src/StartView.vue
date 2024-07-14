<template>
    <div class="container">
        <div class="startview">
            <div class="loginform">
                <div class="login-title">
                    LOGIN
                </div>
                <label class="login-input-row" style="margin-top: 44px;">
                    <img src="./assets/accounticon.svg" alt="">
                    <div class="input-container">
                        <div class="label">Nomor Identitas</div>
                        <input type="text">
                    </div>
                </label>
                <label class="login-input-row" style="margin-top: 21px;">
                    <img src="./assets/passwordicon.svg">
                    <div class="input-container">
                        <div class="label">Password</div>
                        <input type="password">
                    </div>
                </label>
                <div style="margin-top: 20px;">
                    <a>Lupa password?</a>
                </div>
                <div class="btns">
                    <button class="login-btn" @click="$router.push('/face1')">MASUK</button>
                </div>
            </div>
            <div>
                <img src="./assets/homelogo.png" alt="">
            </div>
        </div>
    </div>
</template>
<style>
.startview {
    margin-top: 10rem;
    display: flex;
    justify-content: space-between;
}

.loginform {
    background-color: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0px 0px 4px 2px #eee;
}

.login-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
}

.login-input-row {
    background-color: #E3F2FD;
    display: flex;
    border-radius: 28px;
    width: 25rem;
    padding: 0.5rem 24px;

    .label {
        color: #666;
    }

    input {
        background-color: transparent;
        border-style: none;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        font-size: 18px;
    }
}

.input-container {
    flex-grow: 1;
    padding: 4px;
    margin-left: 8px;
}

.btns {
    text-align: center;
    margin-top: 27px;
}

.login-btn {
    padding: 16px 42px;
    font-size: 18px;
    color: white;
    border-radius: 32px;
    border-style: none;
    box-sizing: border-box;
    background-color: #00B2FF;
}
</style>