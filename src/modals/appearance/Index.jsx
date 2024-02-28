/* eslint-disable react/prop-types */
import Button from "../../components/button/Index";

export default function Appearance({ close }) {
    return (
        <div className="w-[600px]">
            <h3 className="mt-8 mb-3 text-[1.438rem] leading-7 font-extrabold text-center">
                Görünümü Özelleştir
            </h3>
            <div className="p-8 pt-0">
                <div className="flex items-center justify-center pt-40px">
                    <Button onClick={close}>Bitti</Button>
                </div>
            </div>
        </div>
    );
}
