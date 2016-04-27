import chai from 'chai';

import convert from '../../src/convert';

const {expect} = chai;

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

describe('json object convert to graphQL schema', function(){

  it('should create correct graphQLObjectType', () => {
    const schema = {
      query:{
        viewer:{
          type:'User',
          ref:1,
        },
      },
      mutation:{
        addFriends:{
          todo:{
            type:'Todo',
            ref:1,
          },
          user:{
            type:'User',
            ref:1,
          },
        },
      },
    };



  });
});
