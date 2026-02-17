import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fafafc] text-navy overflow-x-hidden">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    {/* Header */}
                    <div className="mb-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-surface-muted text-primary text-xs font-bold tracking-widest uppercase mb-4">
                            Terms of Service
                        </span>
                        <h1 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">
                            서비스 이용약관
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="glass-card p-8 md:p-12 text-navy-muted space-y-8 leading-relaxed">

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제1조 (목적)</h2>
                            <p>
                                본 약관은 neoreo(이하 &apos;회사&apos;)가 스마트폰, 태블릿 PC 등 모바일 기기를 통해 제공하는 모든 게임 및 제반 서비스(이하 &apos;서비스&apos;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제2조 (용어의 정의)</h2>
                            <ul className="space-y-2">
                                {[
                                    "'회원'이란 본 약관에 동의하고 회사가 제공하는 통합 계정(neoreo 계정)을 생성하여 서비스를 이용하는 자를 의미합니다.",
                                    "'neoreo 계정'이란 회사가 제공하는 다양한 게임 서비스를 하나의 계정으로 이용할 수 있도록 회사가 승인한 로그인 계정을 의미합니다.",
                                    "'유료 콘텐츠'란 회원이 서비스를 이용함에 있어 회사 또는 앱 마켓을 통해 유상으로 구매하는 게임 내 재화, 아이템, 구독형 상품 등을 의미합니다.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제3조 (약관의 효력 및 개정)</h2>
                            <ul className="space-y-2">
                                {[
                                    '회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.',
                                    '회사가 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여, 적용일자 7일 전부터 서비스 내 공지사항 또는 팝업 등을 통해 공지합니다.',
                                    '회원이 개정된 약관의 적용일 이후에도 서비스를 계속 이용하는 경우 개정된 약관에 동의한 것으로 간주합니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제4조 (이용계약의 체결 및 통합 계정)</h2>
                            <ul className="space-y-2">
                                {[
                                    '이용계약은 회원이 되고자 하는 자가 앱 최초 실행 시 본 약관 및 개인정보 처리방침에 동의하고, 계정 생성을 완료함으로써 체결됩니다.',
                                    '회원은 하나의 neoreo 계정으로 회사가 서비스하는 모든 게임을 이용할 수 있습니다. 단, 개별 게임의 특성에 따라 일부 서비스는 제한될 수 있습니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제5조 (서비스의 제공 및 중단)</h2>
                            <ul className="space-y-2">
                                {[
                                    '회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 서비스를 제공합니다.',
                                    '회사는 서버 점검, 네트워크 오류, 긴급한 보안 문제 등이 발생할 경우 서비스 제공을 일시적으로 중단할 수 있습니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제6조 (유료 콘텐츠의 구매 및 청약철회)</h2>
                            <ul className="space-y-2">
                                {[
                                    '회원이 구매한 유료 콘텐츠는 구매일로부터 7일 이내에 청약철회(환불)를 요청할 수 있습니다.',
                                    '모바일 기기를 통한 결제는 해당 앱 마켓의 결제 정책을 따릅니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제7조 (회원의 의무 및 이용 제한)</h2>
                            <p className="mb-3 text-[15px]">회원은 서비스 이용 중 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                            <div className="p-4 bg-surface-muted rounded-xl space-y-2 text-[15px] mb-3">
                                <p>1. 버그 악용, 비정상적인 프로그램 사용</p>
                                <p>2. 타인의 계정 정보 도용</p>
                                <p>3. 타인에게 불쾌감을 주는 행위 및 서비스 운영 정책 위반</p>
                            </div>
                            <p className="text-[15px]">
                                회사는 회원이 상기 의무를 위반한 경우, 사전 통보 없이 해당 정보를 삭제하고 계정 정지 등의 조치를 취할 수 있습니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제8조 (저작권 등의 귀속)</h2>
                            <ul className="space-y-2">
                                {[
                                    '회사가 제작한 서비스 내의 모든 콘텐츠에 대한 지식재산권은 회사에 귀속됩니다.',
                                    '회원은 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 영리 목적으로 이용하여서는 안 됩니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제9조 (계약 해지 및 회원 탈퇴)</h2>
                            <ul className="space-y-2">
                                {[
                                    "회원은 언제든지 게임 내 '설정' 화면의 '계정 탈퇴' 기능을 통해 이용계약을 해지할 수 있습니다.",
                                    '탈퇴 시 회원의 통합 계정 정보 및 모든 게임 데이터는 복구 불가능한 상태로 삭제됩니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제10조 (면책 조항)</h2>
                            <ul className="space-y-2">
                                {[
                                    '회사는 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.',
                                    '회사는 회원의 기기 변경, 분실 등으로 인한 데이터 손실에 대해 책임을 지지 않습니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy mb-3">제11조 (준거법 및 재판관할)</h2>
                            <ul className="space-y-2">
                                {[
                                    '회사와 회원 간에 제기된 소송은 대한민국 법을 준거법으로 합니다.',
                                    '회사와 회원 간에 발생한 분쟁에 관한 소송은 관련 법령에 따른 관할 법원에 제소합니다.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="pt-6 border-t border-gray-100">
                            <h2 className="text-lg font-bold text-navy mb-3">부칙</h2>
                            <p className="text-[15px]">본 약관은 2026년 2월 17일부터 시행됩니다.</p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
