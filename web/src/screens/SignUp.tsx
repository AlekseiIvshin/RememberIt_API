import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <label>Login:<input type="text" name="name" /></label>
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
}

export default SignUp;