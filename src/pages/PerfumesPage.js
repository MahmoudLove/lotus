import { useState } from 'react';
import { faker } from '@faker-js/faker';
function PerfumesPage() {
  const [amount, setAmount] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  const perfumeCount = [...document.querySelectorAll('.perfume-para')];
  const handleAmountChange = (event) => {
    if (event.target.classList.contains('perfume-para')) {
      setAmount(parseInt(event.target.textContent) * 10);
      perfumeCount.forEach((p) => {
        p.classList.remove('text-black', 'border-black', 'border-[3px]');
      });
      event.target.classList.add('text-black', 'border-black', 'border-[3px]');
    }
  };
  //   console.log(perfumeCount[0]?.classList.add('font-bold'));
  return (
    <div className="m-10">
      <div className="text-center mb-4">
        <img src={faker.image.business()} alt="just" className="inline-block" />
      </div>
      <div
        className="flex justify-center gap-5 perfume-para_container my-7"
        onClick={handleAmountChange}
      >
        <p className="perfume-para py-4 px-2 border-[2px] border-zinc-500 font-bold text-zinc-500 text-2xl">
          30ML
        </p>
        <p className="perfume-para py-4 px-2 border-[2px] border-zinc-500 font-bold text-zinc-500 text-2xl">
          50ML
        </p>
        <p className="perfume-para py-4 px-2 border-[2px] border-zinc-500 font-bold text-zinc-500 text-2xl">
          100ML
        </p>
      </div>
      <div className="text-center">
        <h4 className="uppercase border-b-[2px] border-red-500 pb-1 inline text-red-500">
          BOTTLE SIZE
        </h4>
      </div>
      <form className="border-b-[2px] border-black flex gap-2 pb-4 uppercase">
        <label className="text-xl">fragnace type</label>
        <input
          placeholder="EX COCA CHANEL"
          className="grow outline-none text-xl"
        />
      </form>{' '}
      <div className="flex justify-around mb-5">
        <div className="inline-flex flex-col items-center">
          <h3 className="mb-4 text-2xl">Quantity</h3>
          <div className="flex border-zinc-500 border-2">
            <button
              className="py-3 px-5 text-3xl text-zinc-500"
              onClick={() => {
                if (itemCount <= 1) return;
                setItemCount(itemCount - 1);
              }}
            >
              -
            </button>
            <p className="py-3 px-5 text-3xl">{itemCount}</p>
            <button
              className="py-3 px-5 text-3xl text-zinc-500"
              onClick={() => setItemCount(itemCount + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="inline-flex flex-col items-center">
          <h3 className="mb-4 text-2xl uppercase">price total</h3>
          <p className="text-5xl uppercase">{amount * itemCount} EGP</p>
        </div>
      </div>
    </div>
  );
}
export default PerfumesPage;
