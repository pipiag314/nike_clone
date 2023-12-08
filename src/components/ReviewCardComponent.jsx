import { star } from "../assets/icons"

const ReviewCardComponent = ({ review }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img 
            src={review.imgURL} 
            alt="customer image" 
            className="rounded-full object-cover w-[150px] h-[150px]"
        />
        <p className="mt-5 text-center info-text max-w-sm">{review.feedback}</p>
        <div className="mt-5 flex gap-2 justify-center items-center">
            <img src={star} width={24} height={24} className="object-contain m-0 p-0" />
            <p className="text-xl font-montserrat text-slate-gray">({review.rating})</p>            
        </div>
        <h2 className="text-2xl font-semibold font-palanquin mt-5">{review.customerName}</h2>
    </div>
  )
}

export default ReviewCardComponent