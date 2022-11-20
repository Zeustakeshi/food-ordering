import { NavLink } from "react-router-dom";
import { useApp } from "../../context/AppProvider";
import Image from "../image/Image";
import Counter from "./Counter";

const CartList = () => {
    const { carts } = useApp();
    return (
        <div className="py-4 rounded-lg bg-[#fdfbfa] shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] max-w-[800px]">
            <ul>
                {carts.slice(0, 6).map((cart, index) => {
                    const cartInfo = cart.info;
                    return (
                        <li
                            key={index}
                            className="w-full flex justify-between items-center gap-5 px-5 py-2 cursor-pointer hover:bg-gray4"
                        >
                            <div className="max-w-[80px] col-span-1 w-[80px] h-[80px] min-w-[80px] min-h-[80px] rounded-lg">
                                <Image src={cartInfo.img}></Image>
                            </div>
                            <div className="w-full flex justify-start items-center gap-5 ">
                                <div className="w-full flex flex-col justify-start items-start">
                                    <h3 className="font-bold">
                                        {cartInfo.title}
                                    </h3>
                                    <p
                                        style={{
                                            "--line": 2,
                                        }}
                                        className="content-overflow-limitline"
                                    >
                                        {cartInfo.desc}
                                    </p>
                                </div>
                                <Counter cnt={cart.count}></Counter>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <NavLink
                to="/cart"
                className="text-center py-2 block w-full text-primary-green hover:opacity-90 font-medium"
            >
                see more
            </NavLink>
        </div>
    );
};

export default CartList;
