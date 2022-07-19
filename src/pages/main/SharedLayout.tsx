import { Outlet } from "react-router-dom";

import { Header, Footer, EditModal } from "../../components";
import { Wrapper } from "../../assets/wrapper/SharedLayout";
import { Modal } from "../../components/modal";
import { useAppSelector } from "../../hooks/reduxHooks";

export const SharedLayout = () => {
  const { isModalOpen, isEditModalOpen } = useAppSelector(
    (state) => state.modal
  );

  return (
    <Wrapper>
      <Header />
      <div className="outlet">
        <Outlet />
        {isModalOpen && <Modal />}
        {isEditModalOpen && <EditModal />}
      </div>
      <Footer />
    </Wrapper>
  );
};
