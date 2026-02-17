import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafc] text-navy overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-10">
                <span className="inline-block py-1.5 px-4 rounded-full bg-surface-muted text-primary text-xs font-bold tracking-widest uppercase mb-4">
                  Privacy Policy
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">
                  개인정보 처리방침
                </h1>
                <p className="text-sm text-navy-muted">시행일: 2023년 1월 1일</p>
              </div>

              {/* Content */}
              <div className="glass-card p-8 md:p-12 space-y-8">
                <p className="text-navy-muted leading-relaxed">
                  <strong className="text-navy">neoreo</strong> (이하 &quot;회사&quot;)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </p>

                {[
                  {
                    title: '1. 개인정보의 처리 목적',
                    content: '회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.',
                    list: ['홈페이지 회원가입 및 관리 - 회원 가입의사 확인을 위한 목적'],
                  },
                  {
                    title: '2. 개인정보의 처리 및 보유 기간',
                    content: '회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.',
                    list: ['홈페이지 회원가입 및 관리: 회원 탈퇴 시 또는 파기 요청 시까지'],
                  },
                  {
                    title: '3. 처리하는 개인정보의 항목',
                    content: '회사는 다음의 개인정보 항목을 처리하고 있습니다.',
                    list: [
                      '회원 가입 및 관리 (필수): 이메일, 닉네임',
                      '서비스 이용 시 자동 수집: 기기 정보(모델명, OS 버전), 접속 로그, 접속 IP, 게임 이용 기록(점수, 랭킹 등)',
                    ],
                  },
                  {
                    title: '4. 개인정보의 파기절차 및 파기방법',
                    content: '회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때는 지체없이 해당 개인정보를 파기합니다.',
                  },
                  {
                    title: '5. 정보주체와 법정대리인의 권리·의무 및 행사방법',
                    content: '정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.',
                  },
                  {
                    title: '6. 개인정보의 안전성 확보조치',
                    content: '회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.',
                    list: ['정기적인 자체 감사 실시 (분기 1회)'],
                  },
                  {
                    title: '7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항',
                    content: '회사는 정보주체의 이용정보를 저장하고 수시로 불러오는 \'쿠키(cookie)\'를 사용하지 않습니다.',
                  },
                  {
                    title: '8. 개인정보 보호책임자',
                    content: '회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.',
                    extra: ['성명: 나찬혁', '직책: 대표', '연락처: nch6807@neoreo.org'],
                  },
                  {
                    title: '9. 개인정보 열람청구',
                    content: '정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.',
                    extra: ['부서명: neoreo', '연락처: nch6807@neoreo.org'],
                  },
                  {
                    title: '10. 개인정보의 국외 이전',
                    content: '회사는 안정적인 서비스 제공을 위해 개인정보를 국외에 위치한 클라우드 서버에 보관할 수 있습니다.',
                    extra: [
                      '이전받는 자: Supabase / Google Cloud',
                      '이전 국가: 미국 등',
                      '이전 항목: 서비스 이용 기록 및 회원 정보',
                    ],
                  },
                  {
                    title: '11. 개인정보 처리방침 변경',
                    content: '이 개인정보 처리방침은 2023년 1월 1일부터 적용됩니다.',
                  },
                ].map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-lg font-bold text-navy mb-3">{section.title}</h2>
                    <p className="text-navy-muted leading-relaxed text-[15px]">{section.content}</p>
                    {section.list && (
                      <ul className="mt-3 space-y-1.5">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-navy-muted text-[15px]">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.extra && (
                      <div className="mt-3 p-4 bg-surface-muted rounded-xl text-[15px] text-navy-muted space-y-1">
                        {section.extra.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
