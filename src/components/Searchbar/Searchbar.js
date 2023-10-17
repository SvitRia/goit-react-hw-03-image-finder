
import { HiSearch } from 'react-icons/hi';
import { Formik } from 'formik';
import { StyledForm, Input, BtnSearch, StyledSearchForm } from './Searchbar.styled';

export const SearchForm = ({ onChangeFilter }) => {
  return (
    <Formik
      initialValues={{
        value: ''
      }}
    
      onSubmit={(values, actions) => {
        onChangeFilter(values);
        actions.resetForm();
      }}
    >
      <StyledSearchForm>
      <StyledForm>
       
              <Input name="value" type="text" />

          <BtnSearch type="submit" ><HiSearch  /></BtnSearch>
        </StyledForm>
        </StyledSearchForm>
    </Formik>
  );
};



