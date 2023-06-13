import React, { useState } from 'react'
import {
  DataGrid,
  Column,
  Paging,
  Pager,
  SearchPanel
} from 'devextreme-react/data-grid'

import '../assets/styles/datagrid.css'

function CustomDataGrid({ accounts, handleModalShow }) {
  const [currentPage, setCurrentPage] = useState(8)
  const [pageSize, setPageSize] = useState(4)

  const handlePageIndexChange = (selectedPageIndex) => {
    setCurrentPage(selectedPageIndex)
  }

  const handlePageSizeChange = (selectedPageSize) => {
    setPageSize(selectedPageSize)
  }

  const handleFilterButtonClick = () => {
    console.log('Filter button clicked')
  }

  // Datagrid e eklenen elementler
  const handleToolbarPreparing = (e) => {
    const toolbarItems = e.toolbarOptions.items

    // Yeni hesap ekle butonu
    toolbarItems.push(
      {
        widget: 'dxButton',
        location: 'after',
        options: {
          icon: 'add',
          text: 'Yeni Hesap Ekle',
          onClick: handleModalShow,
          stylingMode: 'contained',
          type: 'normal',
          elementAttr: {
            style: {
              backgroundColor: '#744bfc',
              borderRadius: '25px',
              color: 'white',
              height: '44px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '500',
              fontSize: '14px'
            }
          }
        }
      },

      // Filtre Butonu
      {
        widget: 'dxButton',
        location: 'before',
        options: {
          icon: 'filter',
          onClick: handleFilterButtonClick,
          elementAttr: {
            style: {
              color: 'white',
              height: '42px',
              borderRadius: '2rem',
              border: 0,
              padding: '0 0.45rem'
            }
          }
        }
      }
    )

    // Search paneli sol datagridin ust sol kismina alma
    toolbarItems.forEach((item) => {
      if (item.name === 'searchPanel') {
        item.location = 'before'
      }
    })
  }

  return (
    <div className="datagrid-container">
      <DataGrid
        dataSource={accounts}
        keyExpr="link"
        columnAutoWidth={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        height="820"
        onToolbarPreparing={handleToolbarPreparing}
        minRowCount={9}
      >
        <SearchPanel
          visible={true}
          width={340}
          placeholder={'Search objects...'}
        />

        {/* sol alt | sayfa basina goster kismi */}
        <Pager
          visible={true}
          displayMode="compact"
          showPageSizeSelector={true}
          allowedPageSizes={[4, 8, 12, 24]}
        />

        {/* sag alt | n inci sayfayi goster kismi */}
        <Paging
          enabled={true}
          // index ve sayfa boyutu
          defaultPageIndex={currentPage}
          pageIndex={currentPage}
          pageSize={pageSize}
          // index ve sayfa boyutu icin handler fonksiyonlari
          onPageSizeChange={handlePageSizeChange}
          onPageIndexChange={handlePageIndexChange}
        />

        {/* Kolonlar */}
        <Column dataField="link" caption="Sosyal Medya Linki" />
        <Column dataField="name" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />
        {/*  */}
      </DataGrid>
    </div>
  )
}

export default CustomDataGrid
