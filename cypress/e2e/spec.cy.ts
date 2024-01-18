describe('Nuxt Movie App spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/nuxt3_movie_app')
    cy.wait(3000)
  })
  it('영화 리스트를 가져온다.', () => {
    cy.get('#best_movie_title').should('not.have.text', '')
    cy.get('.swiper-wrapper').children().should('have.length.greaterThan', 0)
  })

  it('영화 상세 페이지로 이동한다.', () => {
    cy.get('.swiper-wrapper')
      .children()
      .first()
      .find('a p')
      .invoke('text')
      .then((text) => {
        const title = text
        cy.get('.swiper-slide').first().click()
        cy.wait(3000)
        cy.get('#movie_title').should('contain.text', title)
      })
  })

  it('Header의 로고를 누르면 홈페이지로 이동한다.', () => {
    cy.get('.swiper-wrapper').children().first().click()
    cy.wait(3000)
    cy.get('#logo').click()
    // url 홈페이지로 돌아왔는지 확인
    cy.url().should('eq', 'http://localhost:3000/nuxt3-movie-app/')
  })
  // Header의 InputText에 검색어를 입력하고 검색 버튼을 누르면 검색 결과 페이지로 이동한다.
  it('Header의 검색 기능으로 영화 검색이 가능해야한다.', () => {
    cy.get('.pi-search').click()
    cy.get('#search_input').type('the')
    cy.wait(3000)
    // search_result 안에 첫번째 클릭
    cy.get('#search_result').children().first().click()

    cy.wait(3000)
    cy.get('#movie_title').should('contain.text', 'the')
  })
})
