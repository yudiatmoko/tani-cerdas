export default function Login() {
  return (
    <>
      <div className="w-[1440px] h-[1024px] relative bg-[#c1d8ad]">
        <div className="w-[528px] h-[725px] left-[7749px] top-[1686px] absolute">
          <div className="w-[528px] h-[725px] left-0 top-0 absolute border border-black" />
          <div className="w-[895.36px] h-[0px] left-0 top-[1.89px] absolute origin-top-left rotate-[53.86deg] border border-black"></div>
          <div className="w-[895.36px] h-[0px] left-0 top-[725px] absolute origin-top-left rotate-[-53.86deg] border border-black"></div>
        </div>
        <div className="pl-8 pr-2 py-2 left-[200.83px] top-[142px] absolute bg-[#273c15] rounded-2xl shadow justify-start items-center gap-8 inline-flex">
          <div className="w-[483.33px] px-14 flex-col justify-center items-center gap-[35px] inline-flex">
            <div className="self-stretch h-[95px] px-[21px] flex-col justify-start items-center gap-[9px] flex">
              <div className="self-stretch text-center text-white text-[42px] font-semibold font-['Inter'] leading-[63px]">
                Selamat Datang
              </div>
              <div className="self-stretch text-center text-[#f0f5eb] text-[15px] font-light font-['Inter'] leading-snug">
                Masuk dan Wujudkan Pertanian Lebih Cerdas
              </div>
            </div>
            <div className="self-stretch h-[308px] flex-col justify-start items-center gap-9 flex">
              <div className="self-stretch h-[249px] flex-col justify-start items-start gap-[41px] flex">
                <div className="self-stretch h-[164px] flex-col justify-start items-end gap-2 flex">
                  <div className="self-stretch h-[65px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="w-[371px] text-white text-sm font-bold font-['Inter'] leading-[21px]">
                      Email{" "}
                    </div>
                    <div className="self-stretch px-4 py-3 bg-[#f0f5eb] rounded-md border border-black justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[401px] text-[#767676] text-xs font-normal font-['Inter'] leading-[18px]">
                        Masukkan email
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[65px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="w-[371px] text-white text-sm font-bold font-['Inter'] leading-[21px]">
                      Password{" "}
                    </div>
                    <div className="self-stretch px-4 py-3 bg-[#f0f5eb] rounded-md border border-black justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[401px] text-[#767676] text-xs font-normal font-['Inter'] leading-[18px]">
                        Masukkan password
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-right text-[#f0f5eb] text-xs font-light font-['Inter'] leading-[18px]">
                    Lupa Password?
                  </div>
                </div>
                <div className="self-stretch p-2.5 bg-[#82af5a] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[401px] text-center text-[#0d0d0d] text-base font-light font-['Inter'] leading-normal">
                    Login
                  </div>
                </div>
              </div>
              <div className="self-stretch text-center text-[#f0f5eb] text-[15px] font-light font-['Inter'] leading-snug">
                or sign in with
              </div>
            </div>
            <div className="w-[31px] h-[31.63px] relative"></div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-[#f0f5eb] text-[15px] font-light font-['Inter'] underline leading-snug">
                Belum punya akun?
              </div>
              <div className="text-[#c1d8ad] text-[15px] font-bold font-['Inter'] underline leading-snug">
                Register
              </div>
            </div>
          </div>
          <img
            className="w-[483.33px] h-[725px] rounded-lg"
            src="https://via.placeholder.com/483x725"
          />
          <img
            className="w-[230px] h-[41.61px]"
            src="https://via.placeholder.com/230x42"
          />
        </div>
      </div>
    </>
  );
}
