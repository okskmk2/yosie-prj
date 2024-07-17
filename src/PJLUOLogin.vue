<template>
    <div class="pjluo">
        <div class="loginform no-shadow">
            <div class="login-title">
                LOGIN PJLUO
            </div>
            <label class="login-input-row" style="margin-top: 44px;">
                <img src="./assets/accounticon.svg" alt="">
                <div class="input-container">
                    <div class="label">Identitas Petugas</div>
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
                <button class="login-btn" @click="$router.push('/exam-monitoring')">MASUK</button>
            </div>
        </div>
    </div>
</template>
<style>
.pjluo {
    padding-top: 32px;
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
}

.loginform.no-shadow {
    box-shadow: none;
}
</style>