import React from 'react'
import { Header, Image, Grid, Segment, Statistic } from 'semantic-ui-react'
import CompetitionsFriendsRank from './CompetitionsFriendsRank.jsx'
import CompetitionsFullPageList from './CompetitionsFullPageList.jsx'
import CreateCompetition from './CreateCompetition.jsx'
import MenuBar from './MenuBar.jsx'
import Data from '../../FakeData'

const CompetitionsFullPage = ({
  isHidden,
  goals,
  compName,
  compCat,
  compStart,
  compEnd,
  handleCompName,
  handleCompCat,
  handleCompStart,
  handleCompEnd,
  competitionsSubmit
}) => {
	console.log('ishidden in the fullpageCompetitions component', isHidden)
  return (
    <div>
      <MenuBar />
      <Header as="h2">
        <Image
          circular
          src="https://react.semantic-ui.com/assets/images/avatar/large/patrick.png"
        />{' '}
        My Competitions
      </Header>
      <Segment clearing>
        <Statistic.Group widths="three">
          <CreateCompetition
            isHidden={isHidden}
            compName={compName}
            compCat={compCat}
            compStart={compStart}
            compEnd={compEnd}
            handleCompName={handleCompName}
            handleCompCat={handleCompCat}
            handleCompStart={handleCompStart}
            handleCompEnd={handleCompEnd}
            competitionsSubmit={competitionsSubmit}
          />
          <Statistic>
            <Statistic.Value>
              {`5  `}
              <i className="flag checkered icon" />
            </Statistic.Value>
            <Statistic.Label>{`Competitions    Won`}</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {`42  `}
              <Image
                src="https://st2.depositphotos.com/4326917/10312/v/450/depositphotos_103125822-stock-illustration-champions-cup-line-vector-icon.jpg"
                className="circular inline"
              />
            </Statistic.Value>
            <Statistic.Label>Trophies</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
      {Data.map(CompetitionsFp => {
        return (
          <CompetitionsFullPageList
            key={CompetitionsFp.id}
            CompetitionsFp={CompetitionsFp}
          />
        );
      })}
    </div>
  )
}

export default CompetitionsFullPage