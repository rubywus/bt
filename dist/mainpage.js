import { Wrapper, Yellowbox, whitebox, Box } from "./main.styles";
import { useRouter } from "next/router";

export default function Main() {
	const router = useRouter();

	function onClickMove1() {
		router.push("../log_in/login");
	}
	return (
		<Wrapper>
			<div>BOBA TIME</div>
			<Yellowbox>
				<div>Hi there</div>
				<br />
				<button onClick={onClickMove1}> 로그인 페이지로 이동 </button>
				<br />
			</Yellowbox>
		</Wrapper>
	);
}
