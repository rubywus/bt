import {Wrapper, Yellowbox, whitebox, Box} from "./login.styles";

export default function LogIn()  {
    return(
        <Wrapper>
            <div>BOBA TIME</div>
                <Yellowbox>
                <div>Hi there</div><br/>
                <Box type="text"  placeholder="이메일을 입력해주세요."/><br />
                <Box type="text"  placeholder="비밀번호를 입력해주세요."/><br />
                    
                </Yellowbox>

        </Wrapper>
    )
}
