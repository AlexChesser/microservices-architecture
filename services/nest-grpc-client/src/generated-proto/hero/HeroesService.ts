// Original file: ../nest-grpc-server/src/hero/hero.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Hero as _hero_Hero, Hero__Output as _hero_Hero__Output } from '../hero/Hero';
import type { HeroById as _hero_HeroById, HeroById__Output as _hero_HeroById__Output } from '../hero/HeroById';

export interface HeroesServiceClient extends grpc.Client {
  FindOne(argument: _hero_HeroById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _hero_HeroById, metadata: grpc.Metadata, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _hero_HeroById, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _hero_HeroById, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroById, metadata: grpc.Metadata, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroById, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroById, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  
}

export interface HeroesServiceHandlers extends grpc.UntypedServiceImplementation {
  FindOne: grpc.handleUnaryCall<_hero_HeroById__Output, _hero_Hero>;
  
}

export interface HeroesServiceDefinition extends grpc.ServiceDefinition {
  FindOne: MethodDefinition<_hero_HeroById, _hero_Hero, _hero_HeroById__Output, _hero_Hero__Output>
}
