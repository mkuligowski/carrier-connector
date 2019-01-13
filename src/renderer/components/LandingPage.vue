<template>
    <div class="container">
      <section class="section">
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <a class="button is-primary">
              Synchronizacja z subiektem
            </a>
          </p>
          <p class="control">
            <a class="button is-light">
              Dodaj nowe zamówienie
            </a>
          </p>
        </div>
        <b-field grouped group-multiline>
            <div class="control">
                <b-switch v-model="isBordered">Sport</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isStriped">Meble</b-switch>
            </div>
        </b-field>

        <b-field>
            <b-input placeholder="Wyszukaj..."
                type="search"
                icon="magnify">
            </b-input>
        </b-field>

        <b-table :data="data" :columns="columns"></b-table>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            field: 'displayNumber',
            label: 'Numer',
          },
          {
            field: 'status',
            label: 'Status',
          },
          {
            field: 'streetAddress',
            label: 'Adres',
          },
          {
            field: 'postalCode',
            label: 'Kod pocztowy',
          },
          {
            field: 'city',
            label: 'Miejscowość',
          },
          {
            field: 'countryName',
            label: 'Kod kraju',
          },
          {
            field: 'firstName',
            label: 'nazwa',
          },
          {
            field: 'email',
            label: 'email',
          },
          {
            field: 'phoneNumber',
            label: 'Nr. tel',
          },
        ],
        data: [
          {
            id: 1,
            number: null,
            totalPrice: 300.0,
            defaultRef: '123',
            status: null,
            orderDate: null,
            label: null,
            shippingNumber: null,
            streetAddress: 'osiedle Tysiąclecia, 3/24',
            postalCode: '34-220',
            city: 'Maków Podhalański',
            stateProvince: null,
            countryName: 'Poland',
            firstName: 'Mariusz',
            lastName: null,
            email: 'kulig15@gmail.com',
            phoneNumber: '889159882',
            pickupDate: null,
            subiektId: null,
            displayNumber: 'ZR/1',
            externalOrderNumber: null,
            magId: 1,
            synchroDate: '2019-01-12T23:39:52.425+01:00',
            carrier: null,
          },
          {
            id: 2,
            number: null,
            totalPrice: 400.0,
            defaultRef: '123',
            status: null,
            orderDate: null,
            label: null,
            shippingNumber: null,
            streetAddress: 'osiedle Tysiąclecia, 3/24',
            postalCode: '34-220',
            city: 'Maków Podhalański',
            stateProvince: null,
            countryName: 'Poland',
            firstName: 'Janusz',
            lastName: null,
            email: 'kulig15@gmail.com',
            phoneNumber: '889159882',
            pickupDate: null,
            subiektId: null,
            displayNumber: 'ZR/2',
            externalOrderNumber: null,
            magId: 2,
            synchroDate: '2019-01-12T23:39:52.425+01:00',
            carrier: null,
          },
          {
            id: 3,
            number: null,
            totalPrice: 400.0,
            defaultRef: '123',
            status: null,
            orderDate: null,
            label: null,
            shippingNumber: null,
            streetAddress: 'osiedle Tysiąclecia, 3/24',
            postalCode: '34-220',
            city: 'Maków Podhalański',
            stateProvince: null,
            countryName: 'Poland',
            firstName: 'Janusz',
            lastName: null,
            email: 'kulig15@gmail.com',
            phoneNumber: '889159882',
            pickupDate: null,
            subiektId: null,
            displayNumber: 'ZR/2',
            externalOrderNumber: null,
            magId: 2,
            synchroDate: '2019-01-12T23:39:52.425+01:00',
            carrier: null,
          },
          {
            id: 4,
            number: null,
            totalPrice: 200.0,
            defaultRef: '123',
            status: null,
            orderDate: null,
            label: null,
            shippingNumber: null,
            streetAddress: 'osiedle Tysiąclecia, 3/24',
            postalCode: '34-220',
            city: 'Maków Podhalański',
            stateProvince: null,
            countryName: 'Poland',
            firstName: 'Janusz',
            lastName: null,
            email: 'kulig15@gmail.com',
            phoneNumber: '889159882',
            pickupDate: null,
            subiektId: null,
            displayNumber: 'ZR/2',
            externalOrderNumber: null,
            magId: 2,
            synchroDate: '2019-01-12T23:39:52.425+01:00',
            carrier: null,
          },
          {
            id: 5,
            number: null,
            totalPrice: 600.0,
            defaultRef: '123',
            status: null,
            orderDate: null,
            label: null,
            shippingNumber: null,
            streetAddress: 'osiedle Tysiąclecia, 3/24',
            postalCode: '34-220',
            city: 'Maków Podhalański',
            stateProvince: null,
            countryName: 'Poland',
            firstName: 'Janusz',
            lastName: null,
            email: 'kulig15@gmail.com',
            phoneNumber: '889159882',
            pickupDate: null,
            subiektId: null,
            displayNumber: 'ZR/2',
            externalOrderNumber: null,
            magId: 2,
            synchroDate: '2019-01-12T23:39:52.425+01:00',
            carrier: null,
          },
        ],
        isEmpty: false,
        isBordered: false,
        isStriped: false,
        isNarrowed: false,
        isHoverable: false,
        isFocusable: false,
        isLoading: false,
        hasMobileCards: true,
      };
    },
  };
</script>

<style>
 
</style>
