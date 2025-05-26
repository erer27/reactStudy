
/*
    Hooks
    
    1. 변수
        지역변수 : let , const
        props : 속성값으로 전송 받는 값 => 불변 (정적 상태값)
        state : 컴포넌트가 가질 수 있는 동적 상태값 (이벤트시에 값을 변경)
        --------> HTML의 데이터값을 변경
        => useState()
        const a=useState(10);
        => data(){
                return {
                    a:10,
                    b:{},
                    c:[]
                }
            },
            methods:{
                aaa(){
                    let a=10
                    this.a=20
                }

            }
    2. 16이전 => 클래스형 컴포넌트
        16이후 => 함수형 컴포넌트 => 변수값 쉽게 관리 => Hooks
                Hooks => useXxx
                 = useState
    3. useState 형식
        const [변수명, set변수명]=useState(10)
        []  useState([1,2,3,4,5,6...])
                     ---- 초기값
        {} 논리형 useState(true)
        문자형 useState('값')
        a=100 (X) => setA(100) => 리로딩 => 함수를 다시 호출

        => 데이터 관리 (변수)
           --------------- 상태 관리 프로그램
           
        => 변수 / 데이터형 
           -------------
               |
               연산자 => 프로그램 제어 (제어문) => 모아서 관리
                                               배열 / 클래스 / 함수
                                               ------------------
                                               | 순차적으로 호출
                                                  ---------- 알고리즘
                                                  | 로직
 */
function FoodComponent(){

}

export default FoodComponent;
