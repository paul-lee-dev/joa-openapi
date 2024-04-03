"use client";
import { useState } from "react";
import { postAxios, getAxios, patchAxios } from "./http-common";
import tw from "tailwind-styled-components";
import ScrollToTopButton from "@/components/top";
import {
  bankCreateContent,
  bankReadContent,
  BankDeleteContent,
  BankListContent,
  BankUpdateContent,
} from "../contents/bankContent";
import {
  memberCreateContent,
  emailCheckContent,
  phoneCheckContent,
  memberReadContent,
  memberUpdateContent,
  memberListContent,
  memberDeleteContent,
} from "../contents/memberContent";
import {
  productCreateContent,
  productReadContent,
  productUpdateContent,
  productListContent,
  productDeleteContent
} from "../contents/productContent";
import {
  accountCreateContent,
  accountReadContent,
  accountRemainReadContent,
  accountUpdateContent,
  accountLimitUpdateContent,
  accountPasswordUpdateContent,
  accountMemberListContent,
  accountListContent,
  accountDeleteContent
} from "../contents/accountContent";
import {
  transactionDepositContent,
  transactionWithdrawContent,
  transactionSendContent,
  transaction1wonSendContent,
  transaction1wonConfirmContent,
  transactionUpdateContent,
  transactionListContent,
  transactionDeleteContent,
  transactionReadContent
} from "../contents/transactionContent";
import {
  dummyMemberContent,
  dummyAccountContent,
  dummyTransactionContent,
  dummyReadContent,
  dummyListContent,
  dummyUpdateContent,
  dummyDeleteContent,
  dummyDeleteAllContent
} from "../contents/dummyContent";
import { components } from "./sidebar";

export interface Content {
  queryString?: QueryString[];
  title: string;
  desc: string;
  method: string;
  uri: string;
  requestParam: RequestParam[];
  requestExample: string;
  responseParam: ResponseParam[];
  responseExample: string;
  errorCode: ErrorCode[];
}

export interface QueryString {
  name: string;
  desc: string;
  type: string;
  etc: string;
}

export interface RequestParam {
  name: string;
  desc: string;
  type: string;
  required: string;
  etc: string;
}

export interface ResponseParam {
  name: string;
  desc: string;
  type: string;
  required: string;
  etc: string;
}

export interface ErrorCode {
  name: string;
  httpstatus: string;
  desc: string;
}

export interface responseContent {
  status: string,
  message: string,
  data?: any;
}

export default function Testbed() {

  //테스트베드 요청 및 응답 연결을 위한 변수
  const [responseContent, setResponseContent] = useState<responseContent>({
    status: "",
    message: "",
    data: ""
  });

  //사이드바 클릭 시 렌더링 설정
  const [content, setContent] = useState<Content>(transactionDepositContent);
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (index: number) => {

    setResponseContent({
      ...responseContent,
      status: '전송한 요청에 대한 응답 status가 표시됩니다.',
      message: '전송한 요청에 대한 응답 message가 표시됩니다.',
      data: '전송한 요청에 대한 응답 data(또는 page)가 표시됩니다.'
    });

    switch (index) {
      case 1:
        setContent(bankCreateContent);
        break;
      case 2:
        setContent(bankReadContent);
        break;
      case 3:
        setContent(BankUpdateContent);
        break;
      case 4:
        setContent(BankListContent);
        break;
      case 5:
        setContent(BankDeleteContent);
        break;
      case 11:
        setContent(memberCreateContent);
        break;
      case 12:
        setContent(emailCheckContent);
        break;
      case 13:
        setContent(phoneCheckContent);
        break;
      case 14:
        setContent(memberReadContent);
        break;
      case 15:
        setContent(memberUpdateContent);
        break;
      case 16:
        setContent(memberListContent);
        break;
      case 17:
        setContent(memberDeleteContent);
        break;
      case 21:
        setContent(productCreateContent);
        break;
      case 22:
        setContent(productReadContent);
        break;
      case 23:
        setContent(productUpdateContent);
        break;
      case 24:
        setContent(productListContent);
        break;
      case 25:
        setContent(productDeleteContent);
        break;
      case 31:
        setContent(accountCreateContent);
        break;
      case 32:
        setContent(accountReadContent);
        break;
      case 33:
        setContent(accountRemainReadContent);
        break;
      case 34:
        setContent(accountUpdateContent);
        break;
      case 35:
        setContent(accountLimitUpdateContent);
        break;
      case 36:
        setContent(accountPasswordUpdateContent);
        break;
      case 37:
        setContent(accountMemberListContent);
        break;
      case 38:
        setContent(accountListContent);
        break;
      case 39:
        setContent(accountDeleteContent);
        break;
      case 41:
        setContent(transactionDepositContent);
        break;
      case 42:
        setContent(transactionWithdrawContent);
        break;
      case 43:
        setContent(transactionSendContent);
        break;
      case 44:
        setContent(transaction1wonSendContent);
        break;
      case 45:
        setContent(transaction1wonConfirmContent);
        break;
      case 46:
        setContent(transactionUpdateContent);
        break;
      case 47:
        setContent(transactionListContent);
        break;
      case 48:
        setContent(transactionDeleteContent);
        break;
      case 49:
        setContent(transactionReadContent);
        break;
      case 51:
        setContent(dummyMemberContent);
        break;
      case 52:
        setContent(dummyAccountContent);
        break;
      case 53:
        setContent(dummyTransactionContent);
        break;
      case 54:
        setContent(dummyReadContent);
        break;
      case 55:
        setContent(dummyUpdateContent);
        break;
      case 56:
        setContent(dummyListContent);
        break;
      case 57:
        setContent(dummyDeleteContent);
        break;
      case 58:
        setContent(dummyDeleteAllContent);
        break;
      default:
        setContent(bankCreateContent); // Set content to null if selectedItem doesn't match any case
    }
    setSelectedItem(index);
    setFormData({ ...formData, text: '' });


  };



  //테스트베드 인풋 커스텀 가능하게 
  interface customInputText {
    text: string;
  }

  const [formData, setFormData] = useState<customInputText>({
    text: ''
  });

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <ScrollToTopButton />
        <SidebarWrapper>
          <BarTitleContainer>
            <BarTitle>API Descriptions</BarTitle>
            <Ver>V 1.0</Ver>
          </BarTitleContainer>

          <BarSubTitle>Category</BarSubTitle>
          {components.map((item) => (
            <BarItemContainer key={item.name}>
              <BarItem>{item.name}</BarItem>
              {item.sub?.map((sub) => (
                <BarSubItem key={sub.id} onClick={() => handleItemClick(sub.id)}>{sub.title}</BarSubItem>
              ))}
            </BarItemContainer>
          ))}
        </SidebarWrapper>
      </div>
      <Wrapper>
        <Title>{content.title} API</Title>
        <TextItem>{content.desc}</TextItem>
        <Subtitle>요청 Method</Subtitle>
        <TextItem>{content.method}</TextItem>
        <Subtitle>요청 URI</Subtitle>
        <TextItem>{content.uri}</TextItem>
        <Subtitle>요청 메시지 data 명세</Subtitle>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>변수명</ThItem>
              <ThItem>설명</ThItem>
              <ThItem>타입</ThItem>
              <ThItem>필수 여부</ThItem>
              <ThItem>비고</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            {content.requestParam.map((p) => (
              <TrItem key={p.name}>
                <TdItem>{p.name}</TdItem>
                <TdItem>{p.desc}</TdItem>
                <TdItem>{p.type}</TdItem>
                <TdItem>{p.required}</TdItem>
                <TdItem>{p.etc}</TdItem>
              </TrItem>
            ))}
            {content.requestParam.length == 0 ?
              <TrItem>
                <TdItem>-</TdItem>
                <TdItem>-</TdItem>
                <TdItem>-</TdItem>
                <TdItem>-</TdItem>
                <TdItem>request body에 들어가는 data가 없습니다.</TdItem>
              </TrItem> : null}
          </TbodyItem>
        </TableItem>
        <Subtitle>요청 예시</Subtitle>
        <RequestItem>
          {content.requestExample != "" ? content.requestExample : "request body에 들어가는 data가 없습니다."}
        </RequestItem>
        <Subtitle>정상 응답 코드</Subtitle>
        <TextItem>200 OK</TextItem>
        <Subtitle>응답 Content Type</Subtitle>
        <TextItem>application/json</TextItem>
        <Subtitle>응답 메시지 data 명세</Subtitle>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>변수명</ThItem>
              <ThItem>설명</ThItem>
              <ThItem>타입</ThItem>
              <ThItem>비고</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            {content.responseParam.map((p) => (
              <TrItem key={p.name}>
                <TdItem>{p.name}</TdItem>
                <TdItem>{p.desc}</TdItem>
                <TdItem>{p.type}</TdItem>
                <TdItem>{p.etc}</TdItem>
              </TrItem>
            ))}
            {content.responseParam.length == 0 ?
              <TrItem>
                <TdItem>-</TdItem>
                <TdItem>-</TdItem>
                <TdItem>-</TdItem>
                <TdItem>response body에 들어가는 data가 없습니다.</TdItem>
              </TrItem> : null}
          </TbodyItem>
        </TableItem>
        <Subtitle>응답 예시</Subtitle>
        <ResponseItem>{content.responseExample}</ResponseItem>
        <Subtitle>에러 코드</Subtitle>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>에러코드명</ThItem>
              <ThItem>HttpStatus</ThItem>
              <ThItem>메시지</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            {content.errorCode.map((err) => (
              <TrItem key={err.name}>
                <TdItem>{err.name}</TdItem>
                <TdItem>{err.httpstatus}</TdItem>
                <TdItem>{err.desc}</TdItem>
              </TrItem>
            ))}
            {content.errorCode.length == 0 ?
              <TrItem>
                <TdItem>-</TdItem>
                <TdItem>-</TdItem>
                <TdItem>해당 API에만 적용되는 에러 코드가 없습니다. 필요 시 공통 에러 코드를 참조하세요.</TdItem>
              </TrItem> : null}
          </TbodyItem>
        </TableItem>

        <form className="space-y-6" onSubmit={(e) => {
          e.preventDefault();
          var uri = content.uri;
          var requestData = content.requestExample;

          const postFunc = async (params: string) => {

            const jsonParam = (function () {
              if (params.length === 0) { return null; }
              else { return JSON.parse(params); }
            })();

            const response = await postAxios(uri, jsonParam);
            setResponseContent({
              ...responseContent,
              status: response.data.status,
              message: response.data.message,
              data: JSON.stringify(response.data.data, null, 2)
            });
            return response.data;
          };
          const getFunc = async (params: string) => {

            switch (content.uri) {
              case "bank/{bankId}":
                uri = "bank/" + "aa01973d-0fa6-4d2b-ab92-32ff227d8677";
                break;
              case "member/{memberId}":
                uri = "member/" + "2a9da790-02ef-4bbe-b4a5-8b9636465e51";
                break;
              case "member/email/{keyword}/{bankId}":
                uri = "member/email/" + "joen2@ssafy.com" + "/" + "aa01973d-0fa6-4d2b-ab92-32ff227d8677";
                break;
              case "member/phone/{keyword}":
                uri = "member/phone/" + "01023456789";
                break;
              case "product/{productId}":
                uri = "product/" + "d788a18f-5051-429f-9952-09de153197b4";
                break;
              case "transaction/{transactionId}":
                uri = "transaction/" + "b370f1f3-3b5f-420e-966d-eb6a55ffd69e";
                break;
              case "dummy/{dummyId}":
                uri = "dummy/" + "800369d2-3a89-4652-b3cd-668e47490b68";
                break;
              default:
                break;
            }

            const jsonParam = (function () {
              if (params.length === 0) { return null; }
              else { return JSON.parse(params); }
            })();
            const response = await getAxios(uri, jsonParam);
            setResponseContent({
              ...responseContent,
              status: response.data.status,
              message: response.data.message,
              data: JSON.stringify(response.data.data, null, 2)
            });
            if (response.data.data === null && response.data.page != null) {
              setResponseContent({
                ...responseContent,
                message: response.data.message,
                status: response.data.status,
                data: JSON.stringify(response.data.page, null, 2)
              })
            }
            return response.data;
          };
          const patchFunc = async (params: string) => {

            switch (content.uri) {
              case "bank/{bankId}":
                uri = "bank/" + "aa01973d-0fa6-4d2b-ab92-32ff227d8677";
                break;
              case "member/{memberId}":
                uri = "member/" + "2a9da790-02ef-4bbe-b4a5-8b9636465e51";
                break;
              case "product/{productId}":
                uri = "product/" + "d788a18f-5051-429f-9952-09de153197b4";
                break;
              case "transaction/{transactionId}":
                uri = "transaction/" + "b370f1f3-3b5f-420e-966d-eb6a55ffd69e";
                break;
              case "dummy/{dummyId}":
                uri = "dummy/" + "800369d2-3a89-4652-b3cd-668e47490b68";
                break;
              default:
                break;
            }

            const jsonParam = (function () {
              if (params.length === 0) { return null; }
              else { return JSON.parse(params); }
            })();

            const response = await patchAxios(uri, jsonParam);
            setResponseContent({
              ...responseContent,
              status: response.data.status,
              message: response.data.message,
              data: JSON.stringify(response.data.data, null, 2)
            });
            return response.data;
          };

          switch (content.method) {
            case "GET":
              getFunc(requestData);
              break;
            case "POST":
              // if (formData.text != '') requestData = formData.text;
              requestData = formData.text;
              postFunc(requestData);
              break;
            case "PATCH":
              // if (formData.text != '') requestData = formData.text;
              requestData = formData.text;
              patchFunc(requestData);
              break;
            case "DELETE":
              // deleteFunc(requestData);
              setResponseContent({
                ...responseContent,
                status: "SUCCESS",
                message: "실제 실행 시 삭제 완료를 알리는 문구가 출력됩니다.",
                data: "실제 실행 시에는 삭제 요청에 대한 응답 데이터가 있는 경우 출력됩니다."
              });
              break;
            default:
              break;
          }
          // postFunc(content.requestExample);
        }
        }>
          <Subtitle>테스트베드</Subtitle>
          <TextItem>
            공개 테스트베드이므로 여기에 입력된 데이터는 누구나 조회 가능합니다. 민감한 개인 정보는 입력하지 않도록 주의하세요.
          </TextItem>
          <TextArea name="text" value={formData.text} onChange={handleTextArea} placeholder='POST 또는 PATCH 메소드 요청이라면 여기에 request data를 JSON 방식으로 입력 후 요청 보내기 버튼을 클릭하세요. 잘 모르겠다면 요청 예시 항목의 내용을 복사하여 붙여넣기하거나 필요에 따라 수정해서 활용해 보세요.'></TextArea>
          <ButtonItem type='submit'>요청 보내기</ButtonItem>
        </form>
        <Subtitle>응답 status</Subtitle>
        <ResponseItem>{responseContent.status}</ResponseItem>
        <Subtitle>응답 message</Subtitle>
        <ResponseItem>{responseContent.message}</ResponseItem>
        <Subtitle>응답 data</Subtitle>
        <ResponseItem>{responseContent.data}</ResponseItem>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
mt-8
space-y-6
text-sm
`;

const Title = tw.h2`
text-3xl
font-bold
`;

const Subtitle = tw.h3`
text-xl
font-bold
`;

const TextItem = tw.div`
leading-7
`;

const RequestItem = tw.div`
text-xs
bg-blue-200 
hover:bg-blue-300
rounded-lg
p-8
leading-6
`;

const ResponseItem = tw.div`
text-xs
bg-purple-200 
hover:bg-purple-300
rounded-lg
p-8
leading-6
`;

const TableItem = tw.table`
w-full 
text-xs
text-left 
break-keep
`;

const TheadItem = tw.thead`
bg-gray-100
`;

const TbodyItem = tw.tbody`
`;

const TrItem = tw.tr`
border-b
`;

const ThItem = tw.th`
px-4 py-3
`;

const TdItem = tw.td`
px-4 py-3
`;

const ButtonItem = tw.button`
mr-2 px-3.5 py-2 
bg-pink-300 rounded-md 
border-2 border-pink-300 
text-xs font-semibold text-white shadow-sm 
hover:bg-gray-50 hover:text-pink-400 
focus-visible:outline focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-pink-600
`;

const TextArea = tw.textarea`
bg-transparent 
w-full
text-xs
border-2
border-blue-200
bg-slate-100
hover:bg-blue-100
rounded-lg
p-8
leading-6
`;

const SidebarWrapper = tw.div`
w-64 mx-8 mt-12
text-sm
`;

const BarTitleContainer = tw.div`
flex items-end justify-between p-2
`;

const BarTitle = tw.h3`
font-bold
`;

const Ver = tw.div`
mr-14
text-xs
`;

const BarSubTitle = tw.div`
text-xs font-bold p-3 mt-4
`;

const BarItemContainer = tw.div`
mr-12 rounded-md hover:bg-gray-100 
`;

const BarItem = tw.div`
p-2 flex space-4 font-bold
`;

const BarSubItem = tw.a`
p-2 flex space-2 text-xs hover:font-bold cursor-pointer
`;
