import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Phone, Star } from "lucide-react";

const scheduleData = [
  { day: "화", dayKor: "화요일", time: "오후 15:00 ~ 22:00", level: "초중고", levelColor: "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-700 border border-violet-200/50" },
  { day: "수", dayKor: "수요일", time: "오후 15:00 ~ 19:00", level: "초중", levelColor: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-orange-700 border border-orange-200/50", specialTime: "19:00" },
  { day: "목", dayKor: "목요일", time: "오후 15:00 ~ 22:00", level: "초중고", levelColor: "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-700 border border-violet-200/50" },
  { day: "금", dayKor: "금요일", time: "오후 15:00 ~ 22:00", level: "초중고", levelColor: "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-700 border border-violet-200/50" },
  { day: "토", dayKor: "토요일", time: "오후 13:00 ~ 16:00", level: "초중고", levelColor: "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-700 border border-violet-200/50", specialTime: "13:00 ~ 16:00" },
];

export const OperatingHours = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-8">
      {/* Background floating gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-12">
        <div className="inline-flex items-center gap-3 px-10 py-10 bg-slate-800 text-white rounded-2xl mb-6 shadow-lg shadow-slate-800/25 backdrop-blur-sm">
          <Clock className="w-6 h-6" />
          <span className="font-semibold tracking-wide text-[25px]">운영시간 안내</span>
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="grid gap-6 mb-12">
        {scheduleData.map((item) => (
          <Card key={item.day} className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/95 to-gray-50/90 group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="relative p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* Day Circle */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-slate-800/25">
                      <span className="text-2xl font-bold">{item.day}</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>

                  {/* Time Info */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-xl font-semibold text-gray-800">
                        {item.specialTime ? (
                          item.day === "수" ? (
                            <>오후 15:00 ~ <span className="text-red-500 font-bold drop-shadow-sm">19:00</span></>
                          ) : item.day === "토" ? (
                            <>오후 <span className="text-red-500 font-bold drop-shadow-sm">13:00 ~ 16:00</span></>
                          ) : (
                            item.time
                          )
                        ) : (
                          item.time
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Level Badge */}
                <Badge className={`${item.levelColor} backdrop-blur-sm px-6 py-3 font-semibold text-lg w-[100px] justify-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                  {item.level}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Section */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-50/90 via-white-50/80 to-white-50/90 backdrop-blur-xl shadow-2xl shadow-white-200/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5" />
        <CardContent className="relative p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">운영 안내</h3>
              </div>
              <div className="space-y-4">
                {["월요일은 정기 휴무입니다.", "일요일은 시험기간 중에만 운영됩니다.", "공휴일 및 특별 휴무는 별도 공지됩니다."].map((text, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors duration-300">
                    <div className="mt-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">문의 정보</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors duration-300">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold">전화 문의: 010-2317-2898</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors duration-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold">온라인 상담 가능</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Callout */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 via-white-50 to-blue-50 rounded-3xl shadow-2xl shadow-gray-800/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="relative flex items-center justify-center gap-3 mb-3">
          <p className="text-gray/90 font-medium text-lg">정확한 시간 확인을 위해 사전 연락 후 방문해주시기 바랍니다</p>
        </div>
        <p className="text-black-400 text-sm">• 리체움영어학원</p>
      </div>
    </div>
  );
};


