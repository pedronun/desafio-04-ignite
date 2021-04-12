import { useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

interface FoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface EditFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodPlate;
  handleUpdateFood: (food: EditFoodData) => void;
}

const ModalEditFood: React.FC<ModalEditFoodProps> = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (food: EditFoodData) => {
    await handleUpdateFood(food);
    setIsOpen();
  }, [handleUpdateFood, setIsOpen]);

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }

export default ModalEditFood;
