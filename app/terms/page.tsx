import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-12 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">서비스 이용약관</h1>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white border boundary-slate-200 rounded-2xl p-8 md:p-12 shadow-sm text-slate-600 space-y-8 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제1조 (목적)</h2>
                            <p>
                                본 약관은 nereo(이하 '회사')가 스마트폰, 태블릿 PC 등 모바일 기기를 통해 제공하는 모든 게임 및 제반 서비스(이하 '서비스')의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제2조 (용어의 정의)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>'회원'이란 본 약관에 동의하고 회사가 제공하는 통합 계정(nereo 계정)을 생성하여 서비스를 이용하는 자를 의미합니다.</li>
                                <li>'nereo 계정'이란 회사가 제공하는 다양한 게임 서비스를 하나의 계정으로 이용할 수 있도록 회사가 승인한 로그인 계정을 의미합니다.</li>
                                <li>'유료 콘텐츠'란 회원이 서비스를 이용함에 있어 회사 또는 앱 마켓(애플 앱스토어, 구글 플레이 등)을 통해 유상으로 구매하는 게임 내 재화, 아이템, 구독형 상품 등을 의미합니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제3조 (약관의 효력 및 개정)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
                                <li>회사가 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여, 적용일자 7일 전부터 서비스 내 공지사항 또는 팝업 등을 통해 공지합니다. 단, 회원에게 불리하거나 중대한 변경의 경우 30일 전에 공지합니다.</li>
                                <li>회원이 개정된 약관의 적용일 이후에도 서비스를 계속 이용하는 경우 개정된 약관에 동의한 것으로 간주합니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제4조 (이용계약의 체결 및 통합 계정)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>이용계약은 회원이 되고자 하는 자가 앱 최초 실행 시 본 약관 및 개인정보 처리방침에 동의하고, 계정 생성을 완료함으로써 체결됩니다.</li>
                                <li>회원은 하나의 nereo 계정으로 회사가 서비스하는 모든 게임('Fill Your Area' 등)을 이용할 수 있습니다. 단, 개별 게임의 특성에 따라 일부 서비스는 제한될 수 있습니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제5조 (서비스의 제공 및 중단)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 서비스를 제공합니다.</li>
                                <li>회사는 서버 점검, 네트워크 오류, 긴급한 보안 문제 등이 발생할 경우 서비스 제공을 일시적으로 중단할 수 있으며, 이 경우 앱 내 또는 공식 채널을 통해 사전에 공지합니다. 단, 사전에 공지할 수 없는 부득이한 사유가 있는 경우 사후에 공지할 수 있습니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제6조 (유료 콘텐츠의 구매 및 청약철회)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회원이 구매한 유료 콘텐츠는 구매일로부터 7일 이내에 청약철회(환불)를 요청할 수 있습니다. 단, 이미 사용되었거나 부가 혜택이 제공된 콘텐츠는 관련 법령에 따라 청약철회가 제한될 수 있습니다.</li>
                                <li>모바일 기기를 통한 결제는 애플 앱스토어, 구글 플레이 등 해당 앱 마켓의 결제 정책을 따르며, 청약철회 및 환불 역시 해당 앱 마켓의 정책이 우선 적용됩니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제7조 (회원의 의무 및 이용 제한)</h2>
                            <p className="mb-2">회원은 서비스 이용 중 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                            <ol className="list-decimal pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
                                <li>버그 악용, 비정상적인 프로그램(핵 등) 사용</li>
                                <li>타인의 계정 정보 도용</li>
                                <li>1:1 대전, 채팅 등 유저 간 상호작용이 제공되는 서비스에서 타인에게 불쾌감을 주거나, 욕설, 비방, 음란물 등 서비스 운영 정책에 위반되는 닉네임 설정 및 메시지 전송</li>
                            </ol>
                            <p>
                                회사는 회원이 제1항의 의무를 위반한 경우, 사전 통보 없이 해당 정보(닉네임, 채팅 등)를 삭제하고, 계정 정지, 서비스 이용 제한, 통합 계정 삭제 등의 조치를 취할 수 있습니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제8조 (저작권 등의 귀속)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회사가 제작한 서비스 내의 모든 콘텐츠(퍼즐 로직, UI, 텍스트, 이미지, 사운드, 소프트웨어 등)에 대한 지식재산권은 회사에 귀속됩니다.</li>
                                <li>회원은 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제9조 (계약 해지 및 회원 탈퇴)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회원은 언제든지 게임 내 '설정' 화면의 '계정 탈퇴(또는 삭제)' 기능을 통해 이용계약을 해지할 수 있습니다.</li>
                                <li>탈퇴 시 회원의 nereo 통합 계정 정보 및 회사가 서비스하는 모든 게임의 플레이 데이터, 보유한 유료 콘텐츠 등은 복구 불가능한 상태로 삭제됩니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제10조 (면책 조항)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회사는 천재지변, 비상사태, 서비스 설비의 장애 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
                                <li>회사는 회원의 기기 변경, 분실, 기기 초기화, OS 업데이트 등으로 인해 발생한 데이터 및 유료 콘텐츠 손실에 대해 책임을 지지 않습니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">제11조 (준거법 및 재판관할)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>회사와 회원 간에 제기된 소송은 대한민국 법을 준거법으로 합니다.</li>
                                <li>회사와 회원 간에 발생한 분쟁에 관한 소송은 관련 법령에 따른 관할 법원에 제소합니다.</li>
                            </ul>
                        </section>

                        <section className="pt-8 border-t border-slate-100">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">부칙</h2>
                            <p>본 약관은 2026년 2월 17일부터 시행됩니다.</p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
