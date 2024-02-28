import Button from "../../components/button";
import { setCurrentAccount, deleteAccount } from "../../store/user/actions";

const Home = () => {
   

    return (
        <div className="flex flex-col items-center justify-center text-[2rem] mt-12">
            <div>Home Page</div>
            <div className="flex items-center justify-center gap-4">
                <Button
                    onClick={() =>
                      setCurrentAccount({
                            id: 1,
                            username: "aaaa",
                            fullName: "SametaedFurkan",
                            avatar: "/images/avatar2.png",
                        })
                    }
                >
                    ekle
                </Button>
                <Button onClick={() => deleteAccount()}>sil</Button>
            </div>
        </div>
    );
};

export default Home;
