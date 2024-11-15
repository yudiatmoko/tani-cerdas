import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import User from "../assets/user.svg"

export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const pakar = location.state; // Retrieve pakar data from the state
  const rating = 4;

  if (!pakar) {
    return <div>No pakar data available!</div>; // In case no pakar data was passed
  }

  const handleConfirmBooking = () => {
    // Store the booked pakar in sessionStorage
    sessionStorage.setItem('bookedPakar', JSON.stringify(pakar));
    // Redirect back to the previous page (DaftarPakar)
    navigate(-1); // This will go back to the previous page
  };

  return (
    
      <div className="background flex flex-row "/** Background */>
      
        <div className="flex flex-start"/**container sebelah kiri*/>


            <div className="flex items-start" /**container pakar */>
            
              <img 
                className="rounded-[8px]"
                width={83}
                height={111}
                src={pakar.expertImage}
                alt={pakar.expertName}
              />

              <div className="">

                <h5 className="typhography-nama">
                  {pakar.expertName}
                </h5>

                <p className="">
                  {pakar.expertDesc}
                </p>

                <div className="flex items-center space-x-2">

                  <div className="flex-center-padding">
                    {pakar.expertExp}
                  </div>

                  <div className="flex text-yellow-500">

                    {[...Array(5)].map((_, i) => (
                      i < rating ? <span key={i}>★</span> : <span key={i} className="text-gray-300">★</span>
                    ))}

                  </div>
                </div>

              </div>
            
            </div>
          <div className="" /**container tentang pakar */>

          </div>
        

          <div className="" /**container jam booking */>
            
            <div className="" /**jam dan hari (bikin list hari dan jam)*/>

              <div className="" /**hari nya */>

              </div>

              <div className="" /**jam nya */>

              </div>

            </div>

          </div>
        
        </div>
        
        <div className="items-center w-[390px] h-[561px] pt-[6px] pr-[34px] pb-[12px] pl-[34px] g-[10px] flex-shrink rounded-[5px] bg-jadwal-book text-white"/** bg container sebelah kanan */>
          <p className="flex justify-start">
            Jadwalkan Booking Pakar
          </p>
          <div className="flex w-[309px] flex-col items-start g-7 flex-shrink"/**container sebelah kanan */>

            <div className="bg-white flex items-center justify-between g-[50px] px-[6px] py-[20px] w-full rounded-[5px] h-10 mb-[35px] mt-7"/**Pilih tanggal */>
              <p className="text-black flex">
                Pilih tanggal
              </p>
              <img
               className="ml-auto"
               src={User}
              />    
            </div>

            <div className="flex flex-col items-center g-[33px] self-stretch"/**container jam */>

              <p className=""/**keterangan pilih jam */>
                Pilih jam yang tersedia
              </p>

              <div className=""/**List jam untuk booking (bikin list dahulu) */>
                
              </div>

              <Button classname=""/**Button Booking */>
                Booking Sekarang
              </Button>
            
            </div>

          </div>

        </div>

      </div>
  );
}
